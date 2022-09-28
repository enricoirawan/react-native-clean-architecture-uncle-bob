import { injectable, inject } from 'inversify';
import { UseCase } from '../../core/UseCase';
import { Post } from '../entity/Post';
import { PostRepository, POST_REPOSITORY } from '../repository/PostRepository';

export const GET_POST_USE_CASE = 'GET_POST_USE_CASE';

@injectable()
export class GetPostUseCase implements UseCase<Post, GetPostUseCaseParams> {
    private postRepository: PostRepository;

    constructor(@inject(POST_REPOSITORY) postRepository: PostRepository) {
        this.postRepository = postRepository;
    }

    execute(params: GetPostUseCaseParams): Promise<Post> {
        return this.postRepository.getPost(params.postId);
    }
}

export class GetPostUseCaseParams {
    postId: number;

    constructor(postId: number) {
        this.postId = postId;
    }
}
