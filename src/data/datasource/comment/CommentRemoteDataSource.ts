import { injectable } from 'inversify';
import ApiService from '../../api/Api';
import ApiUrls from '../../api/ApiUrls';
import { CommentModel } from '../../model/CommentModel';

export interface CommentRemoteDataSource {
    getComments(postId: number): Promise<CommentModel[]>;
}

export const COMMENT_REMOTE_DATA_SOURCE = 'COMMENT_REMOTE_DATA_SOURCE';

@injectable()
export class CommentRemoteDataSourceImpl implements CommentRemoteDataSource {
    async getComments(postId: number): Promise<CommentModel[]> {
        try {
            const comments = await ApiService.jfetch<CommentModel[]>(
                ApiUrls.POST_ENDPOINT + `/${postId}/comments`,
                {
                    method: ApiService.HttpMethod.GET
                }
            );
            return CommentModel.fromArrayJSON(comments);
        } catch (error) {
            throw new Error('Failed to get comments');
        }
    }
}
