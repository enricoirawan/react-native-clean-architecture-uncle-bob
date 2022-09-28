import { PersonModel } from '../../data/model/PersonModel';
import { Address } from './Address';
import { Company } from './Company';

export class Person {
    private _id: number;
    private _name: string;
    private _username: string;
    private _email: string;
    private _address: Address;
    private _phone: string;
    private _website: string;
    private _company: Company;

    constructor(
        id: number,
        name: string,
        username: string,
        email: string,
        address: Address,
        phone: string,
        website: string,
        company: Company
    ) {
        this._id = id;
        this._name = name;
        this._username = username;
        this._email = email;
        this._address = address;
        this._phone = phone;
        this._website = website;
        this._company = company;
    }

    static mapperToEntity(personModel: PersonModel): Person {
        return new Person(
            personModel.id,
            personModel.name,
            personModel.username,
            personModel.email,
            Address.mapperToEntity(personModel.address),
            personModel.phone,
            personModel.website,
            Company.mapperToEntity(personModel.company)
        );
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get username() {
        return this._username;
    }

    public get email() {
        return this._email;
    }

    public get address() {
        return this._address;
    }

    public get phone() {
        return this._phone;
    }

    public get website() {
        return this._website;
    }

    public get company() {
        return this._company;
    }
}
