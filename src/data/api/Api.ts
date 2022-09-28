import AsyncStorage from '@react-native-community/async-storage';

enum HttpMethod {
    POST = 'POST',
    PUT = 'PUT',
    GET = 'GET',
    DELETE = 'DELETE'
}

interface HeaderOption {
    key: string;
    value: any;
}

interface HttpHeader {
    [k: string]: any;
}

interface HttpParams {
    method: string;
    body: any;
    headers: HttpHeader;
}

interface Params {
    method: HttpMethod;
    body?: any;
    headers?: HeaderOption[];
}

//Call
const createHttpHeader = async (headers?: Array<HeaderOption>) => {
    const tokenAS = await AsyncStorage.getItem('token');
    const token = tokenAS ? tokenAS : '';
    const httpHeader: HttpHeader =
        token && token
            ? {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + token
              }
            : { 'Content-Type': 'application/json' };
    if (headers) {
        headers.forEach((option) => {
            httpHeader[option.key] = option.value;
        });
    }
    return httpHeader;
};

const jfetch = async <T = any>(url: string, params: Params): Promise<T> => {
    const method = params.method;
    const body = params.body;
    const headers = params.headers;
    const httpHeaders = await createHttpHeader(headers);
    const httpParams: HttpParams =
        method === 'POST' || method === 'PUT'
            ? {
                  method: method,
                  body:
                      httpHeaders['Content-Type'] === 'multipart/form-data'
                          ? body
                          : JSON.stringify(body),
                  headers: httpHeaders
              }
            : { method: method, body: null, headers: httpHeaders };
    // console.log("Url" , url);
    // console.log("Params" , httpParams);
    const fetchResponse: Response = await fetch(url, httpParams)
        .then((response) => response)
        .catch((err) => err);
    // console.log('Response Api',fetchResponse);

    if (fetchResponse.ok) {
        const jsonResponse = await fetchResponse.json();
        // console.log("Json Response Parse" , jsonResponse as T)
        return jsonResponse as T;
    } else {
        throw fetchResponse;
    }
};

export default {
    jfetch,
    HttpMethod
};
