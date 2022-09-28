import { injectable, inject } from 'inversify';
import { Post } from '../../domain/entity/Post';
import { PostRepository } from '../../domain/repository/PostRepository';
import {
    PostRemoteDataSource,
    POST_REMOTE_DATA_SOURCE
} from '../datasource/post/PostRemoteDataSource';
import { PostModel } from '../model/PostModel';

@injectable()
export class PostRepositoryImpl implements PostRepository {
    private postRemoteDataSource: PostRemoteDataSource;

    constructor(
        @inject(POST_REMOTE_DATA_SOURCE)
        postRemoteDataSource: PostRemoteDataSource
    ) {
        this.postRemoteDataSource = postRemoteDataSource;
    }

    async getPosts(): Promise<Post[]> {
        const posts = await this.postRemoteDataSource.getPosts();
        return posts.map((post: PostModel) => Post.mapperToEntity(post));
    }

    async getPost(postId: number): Promise<Post> {
        const post = await this.postRemoteDataSource.getPost(postId);
        return Post.mapperToEntity(post);
    }
}
