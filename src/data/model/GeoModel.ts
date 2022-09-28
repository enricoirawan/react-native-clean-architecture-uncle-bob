export class GeoModel {
    public lat: string;
    public lng: string;

    constructor(lat: string, lng: string) {
        this.lat = lat;
        this.lng = lng;
    }

    static fromJSON(data: any): GeoModel {
        return new GeoModel(data.lat, data.lng);
    }

    static fromArrayJSON(data: any): Array<GeoModel> {
        return data.map((item: any) => GeoModel.fromJSON(item));
    }

    toJSON(): object {
        return {
            lat: this.lat,
            lng: this.lng
        };
    }
}
