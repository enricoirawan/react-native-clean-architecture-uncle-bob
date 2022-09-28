import { CompanyModel } from '../../data/model/CompanyModel';

export class Company {
    private _name: string;
    private _catchPhrase: string;
    private _bs: string;

    constructor(name: string, catchPhrase: string, bs: string) {
        this._name = name;
        this._catchPhrase = catchPhrase;
        this._bs = bs;
    }

    static mapperToEntity(commentModel: CompanyModel): Company {
        return new Company(
            commentModel.name,
            commentModel.catchPhrase,
            commentModel.bs
        );
    }

    public get name() {
        return this._name;
    }

    public get catchPhrase() {
        return this._catchPhrase;
    }

    public get bs() {
        return this._bs;
    }
}
