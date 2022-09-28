import { Comment } from '../entity/Comment';

export interface CommentRepository {
    getComments(postId: number): Promise<Array<Comment>>;
}

export const COMMENT_REPOSITORY = 'COMMENT_REPOSITORY';
