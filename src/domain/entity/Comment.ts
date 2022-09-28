import { CommentModel } from '../../data/model/CommentModel';

export class Comment {
    private _postId: number;
    private _id: number;
    private _name: string;
    private _email: string;
    private _body: string;

    constructor(
        postId: number,
        id: number,
        name: string,
        email: string,
        body: string
    ) {
        this._postId = postId;
        this._id = id;
        this._name = name;
        this._email = email;
        this._body = body;
    }

    static mapperToEntity(commentModel: CommentModel): Comment {
        return new Comment(
            commentModel.postId,
            commentModel.id,
            commentModel.name,
            commentModel.email,
            commentModel.body
        );
    }

    public get postId() {
        return this._postId;
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get email() {
        return this._email;
    }

    public get body() {
        return this._body;
    }
}
