import { injectable, inject } from 'inversify';
import { UseCase, NoParams } from '../../core/UseCase';
import { Post } from '../entity/Post';
import { PostRepository, POST_REPOSITORY } from '../repository/PostRepository';

export const GET_POSTS_USE_CASE = 'GET_POSTS_USE_CASE';

@injectable()
export class GetPostsUseCase implements UseCase<Post[], NoParams> {
    private postRepository: PostRepository;

    constructor(@inject(POST_REPOSITORY) postRepository: PostRepository) {
        this.postRepository = postRepository;
    }

    execute(): Promise<Post[]> {
        return this.postRepository.getPosts();
    }
}
