import { injectable, inject } from 'inversify';
import { Comment } from '../../domain/entity/Comment';
import { CommentRepository } from '../../domain/repository/CommentRepository';
import {
    CommentRemoteDataSource,
    COMMENT_REMOTE_DATA_SOURCE
} from '../datasource/comment/CommentRemoteDataSource';
import { CommentModel } from '../model/CommentModel';

@injectable()
export class CommentRepositoryImpl implements CommentRepository {
    private commentRemoteDataSource: CommentRemoteDataSource;

    constructor(
        @inject(COMMENT_REMOTE_DATA_SOURCE)
        commentRemoteDataSource: CommentRemoteDataSource
    ) {
        this.commentRemoteDataSource = commentRemoteDataSource;
    }

    async getComments(postId: number): Promise<Comment[]> {
        const comments = await this.commentRemoteDataSource.getComments(postId);
        return comments.map((comment: CommentModel) =>
            Comment.mapperToEntity(comment)
        );
    }
}
