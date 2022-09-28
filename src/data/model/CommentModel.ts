export class CommentModel {
    public postId: number;
    public id: number;
    public name: string;
    public email: string;
    public body: string;

    constructor(
        postId: number,
        id: number,
        name: string,
        email: string,
        body: string
    ) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }

    static fromJSON(data: any): CommentModel {
        return new CommentModel(
            data.postId,
            data.id,
            data.name,
            data.email,
            data.body
        );
    }

    static fromArrayJSON(data: any): Array<CommentModel> {
        return data.map((item: any) => CommentModel.fromJSON(item));
    }

    toJSON(): object {
        return {
            postId: this.postId,
            id: this.id,
            name: this.name,
            email: this.email,
            body: this.body
        };
    }
}
