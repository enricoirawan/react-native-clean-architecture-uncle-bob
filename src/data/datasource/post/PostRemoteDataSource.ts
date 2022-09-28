import { injectable } from 'inversify';
import ApiService from '../../api/Api';
import ApiUrls from '../../api/ApiUrls';
import { PostModel } from '../../model/PostModel';

export interface PostRemoteDataSource {
    getPosts(): Promise<Array<PostModel>>;
    getPost(postId: number): Promise<PostModel>;
}
export const POST_REMOTE_DATA_SOURCE = 'POST_REMOTE_DATA_SOURCE';

@injectable()
export class PostRemoteDataSourceImpl implements PostRemoteDataSource {
    async getPosts(): Promise<PostModel[]> {
        try {
            const posts = await ApiService.jfetch<PostModel[]>(
                ApiUrls.POST_ENDPOINT,
                {
                    method: ApiService.HttpMethod.GET
                }
            );
            return PostModel.fromArrayJSON(posts);
        } catch (error) {
            throw new Error('Failed to get posts');
        }
    }

    async getPost(postId: number): Promise<PostModel> {
        try {
            const posts = await ApiService.jfetch<PostModel[]>(
                ApiUrls.POST_ENDPOINT + `/${postId}`,
                {
                    method: ApiService.HttpMethod.GET
                }
            );
            return PostModel.fromJSON(posts);
        } catch (error) {
            throw new Error('Failed to get post');
        }
    }
}
