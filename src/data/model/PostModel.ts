export class PostModel {
  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }

  static fromJSON(data: any): PostModel {
    return new PostModel(data.userId, data.id, data.title, data.body);
  }

  static fromArrayJSON(data: any): Array<PostModel> {
    return data.map((item: any) => PostModel.fromJSON(item));
  }

  toJSON(): object {
    return {
      userId: this.userId,
      id: this.id,
      title: this.title,
      body: this.body,
    };
  }
}