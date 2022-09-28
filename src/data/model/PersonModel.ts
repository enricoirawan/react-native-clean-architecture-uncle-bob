import { AddressModel } from './AddressModel';
import { CompanyModel } from './CompanyModel';

export class PersonModel {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: AddressModel;
    public phone: string;
    public website: string;
    public company: CompanyModel;

    constructor(
        id: number,
        name: string,
        username: string,
        email: string,
        address: AddressModel,
        phone: string,
        website: string,
        company: CompanyModel
    ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }

    static fromJSON(data: any): PersonModel {
        return new PersonModel(
            data.id,
            data.name,
            data.username,
            data.email,
            data.address,
            data.phone,
            data.website,
            data.company
        );
    }

    static fromArrayJSON(data: any): Array<PersonModel> {
        return data.map((item: any) => PersonModel.fromJSON(item));
    }

    toJSON(): object {
        return {
            id: this.id,
            name: this.name,
            username: this.username,
            email: this.email,
            address: this.address,
            phone: this.phone,
            website: this.website,
            company: this.company
        };
    }
}
