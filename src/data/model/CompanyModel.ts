export class CompanyModel {
    public name: string;
    public catchPhrase: string;
    public bs: string;

    constructor(name: string, catchPhrase: string, bs: string) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }

    static fromJSON(data: any): CompanyModel {
        return new CompanyModel(data.name, data.catchPhrase, data.bs);
    }

    static fromArrayJSON(data: any): Array<CompanyModel> {
        return data.map((item: any) => CompanyModel.fromJSON(item));
    }

    toJSON(): object {
        return {
            name: this.name,
            catchPhrase: this.catchPhrase,
            bs: this.bs
        };
    }
}
