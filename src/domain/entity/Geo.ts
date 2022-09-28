import { GeoModel } from '../../data/model/GeoModel';

export class Geo {
    private _lat: string;
    private _lng: string;

    constructor(lat: string, lng: string) {
        this._lat = lat;
        this._lng = lng;
    }

    static mapperToEntity(geoModel: GeoModel): Geo {
        return new Geo(geoModel.lat, geoModel.lng);
    }

    public get lat() {
        return this._lat;
    }

    public get lng() {
        return this._lng;
    }
}
