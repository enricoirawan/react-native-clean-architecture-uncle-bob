import { Post } from '../entity/Post';

export interface PostRepository {
    getPosts(): Promise<Array<Post>>;
    getPost(postId: number): Promise<Post>;
}

export const POST_REPOSITORY = 'POST_REPOSITORY';
