import { injectable } from 'inversify';
import ApiService from '../../api/Api';
import ApiUrls from '../../api/ApiUrls';
import { PersonModel } from '../../model/PersonModel';

export interface PersonRemoteDataSource {
    getPersons(): Promise<PersonModel[]>;
}

export const PERSON_REMOTE_DATA_SOURCE = 'PERSON_REMOTE_DATA_SOURCE';

@injectable()
export class PersonRemoteDataSourceImpl implements PersonRemoteDataSource {
    async getPersons(): Promise<PersonModel[]> {
        try {
            const persons = await ApiService.jfetch<PersonModel[]>(
                ApiUrls.USER_ENDPOINT,
                {
                    method: ApiService.HttpMethod.GET
                }
            );
            return PersonModel.fromArrayJSON(persons);
        } catch (error) {
            throw new Error('Failed to get Persons');
        }
    }
}
