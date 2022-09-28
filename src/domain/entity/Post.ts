import { PostModel } from "../../data/model/PostModel";

export class Post {
  private _userId: number;
  private _id: number;
  private _title: string;
  private _body: string;

  constructor(userId: number, id: number, title: string, body: string) {
    this._userId = userId;
    this._id = id;
    this._title = title;
    this._body = body;
  }

  static mapperToEntity(postModel: PostModel): Post {
    return new Post(postModel.userId, postModel.id, postModel.title, postModel.body);
  }

  public get userId() {
    return this._userId;
  }

  public get id() {
    return this._id;
  }

  public get title() {
    return this._title;
  }

  public get body() {
    return this._body;
  }
}