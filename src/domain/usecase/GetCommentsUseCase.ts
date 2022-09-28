import { inject, injectable } from 'inversify';
import { UseCase } from '../../core/UseCase';
import { Comment } from '../entity/Comment';
import {
    CommentRepository,
    COMMENT_REPOSITORY
} from '../repository/CommentRepository';

export const GET_COMMENTS_USE_CASE = 'GET_COMMENTS_USE_CASE';

@injectable()
export class GetCommentsUseCase
    implements UseCase<Comment[], GetCommentsUseCaseParams>
{
    private commentRepository: CommentRepository;

    constructor(
        @inject(COMMENT_REPOSITORY) commentRepository: CommentRepository
    ) {
        this.commentRepository = commentRepository;
    }

    execute(params: GetCommentsUseCaseParams): Promise<Comment[]> {
        return this.commentRepository.getComments(params.postId);
    }
}

export class GetCommentsUseCaseParams {
    postId: number;

    constructor(postId: number) {
        this.postId = postId;
    }
}
