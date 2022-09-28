import { GeoModel } from './GeoModel';

export class AddressModel {
    public street: number;
    public suite: number;
    public city: string;
    public zipcode: string;
    public geo: GeoModel;

    constructor(
        street: number,
        suite: number,
        city: string,
        zipcode: string,
        geo: GeoModel
    ) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }

    static fromJSON(data: any): AddressModel {
        return new AddressModel(
            data.street,
            data.suite,
            data.city,
            data.zipcode,
            data.geo
        );
    }

    static fromArrayJSON(data: any): Array<AddressModel> {
        return data.map((item: any) => AddressModel.fromJSON(item));
    }

    toJSON(): object {
        return {
            street: this.street,
            suite: this.suite,
            city: this.city,
            zipcode: this.zipcode,
            geo: this.geo
        };
    }
}
