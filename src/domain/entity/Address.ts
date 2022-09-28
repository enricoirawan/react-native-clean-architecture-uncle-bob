import { AddressModel } from '../../data/model/AddressModel';
import { Geo } from './Geo';

export class Address {
    private _street: number;
    private _suite: number;
    private _city: string;
    private _zipcode: string;
    private _geo: Geo;

    constructor(
        street: number,
        suite: number,
        city: string,
        zipcode: string,
        geo: Geo
    ) {
        this._street = street;
        this._suite = suite;
        this._city = city;
        this._zipcode = zipcode;
        this._geo = geo;
    }

    static mapperToEntity(addressModel: AddressModel): Address {
        return new Address(
            addressModel.street,
            addressModel.suite,
            addressModel.city,
            addressModel.zipcode,
            Geo.mapperToEntity(addressModel.geo)
        );
    }

    public get street() {
        return this._street;
    }

    public get suite() {
        return this._suite;
    }

    public get city() {
        return this._city;
    }

    public get zipcode() {
        return this._zipcode;
    }

    public get geo() {
        return this._geo;
    }
}
