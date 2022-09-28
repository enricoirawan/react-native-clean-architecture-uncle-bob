import { Container } from 'inversify';
import 'reflect-metadata';
import {
    CommentRemoteDataSource,
    CommentRemoteDataSourceImpl,
    COMMENT_REMOTE_DATA_SOURCE
} from '../data/datasource/comment/CommentRemoteDataSource';
import {
    PersonRemoteDataSource,
    PersonRemoteDataSourceImpl,
    PERSON_REMOTE_DATA_SOURCE
} from '../data/datasource/person/PersonRemoteDataSource';
import {
    PostRemoteDataSource,
    POST_REMOTE_DATA_SOURCE,
    PostRemoteDataSourceImpl
} from '../data/datasource/post/PostRemoteDataSource';
import { CommentRepositoryImpl } from '../data/repository/CommentRepositoryImpl';
import { PersonRepositoryImpl } from '../data/repository/PersonRepositoryImpl';
import { PostRepositoryImpl } from '../data/repository/PostRepositoryImpl';
import {
    CommentRepository,
    COMMENT_REPOSITORY
} from '../domain/repository/CommentRepository';
import {
    PersonRepository,
    PERSON_REPOSITORY
} from '../domain/repository/PersonRepository';
import {
    PostRepository,
    POST_REPOSITORY
} from '../domain/repository/PostRepository';
import {
    GetCommentsUseCase,
    GET_COMMENTS_USE_CASE
} from '../domain/usecase/GetCommentsUseCase';
import {
    GetPersonsUseCase,
    GET_PERSONS_USE_CASE
} from '../domain/usecase/GetPersonsUseCase';
import {
    GetPostsUseCase,
    GET_POSTS_USE_CASE
} from '../domain/usecase/GetPostsUseCase';
import {
    GetPostUseCase,
    GET_POST_USE_CASE
} from '../domain/usecase/GetPostUseCase';

const serviceLocator = new Container();
const injectDataSource = () => {
    serviceLocator
        .bind<PostRemoteDataSource>(POST_REMOTE_DATA_SOURCE)
        .to(PostRemoteDataSourceImpl)
        .inSingletonScope();
    serviceLocator
        .bind<CommentRemoteDataSource>(COMMENT_REMOTE_DATA_SOURCE)
        .to(CommentRemoteDataSourceImpl)
        .inSingletonScope();
    serviceLocator
        .bind<PersonRemoteDataSource>(PERSON_REMOTE_DATA_SOURCE)
        .to(PersonRemoteDataSourceImpl)
        .inSingletonScope();
};
injectDataSource();

const injectRepositories = () => {
    serviceLocator
        .bind<PostRepository>(POST_REPOSITORY)
        .to(PostRepositoryImpl)
        .inSingletonScope();
    serviceLocator
        .bind<CommentRepository>(COMMENT_REPOSITORY)
        .to(CommentRepositoryImpl)
        .inSingletonScope();
    serviceLocator
        .bind<PersonRepository>(PERSON_REPOSITORY)
        .to(PersonRepositoryImpl)
        .inSingletonScope();
};
injectRepositories();

const injectUsecase = () => {
    serviceLocator
        .bind<GetPostsUseCase>(GET_POSTS_USE_CASE)
        .to(GetPostsUseCase)
        .inSingletonScope();
    serviceLocator
        .bind<GetPostUseCase>(GET_POST_USE_CASE)
        .to(GetPostUseCase)
        .inSingletonScope();
    serviceLocator
        .bind<GetCommentsUseCase>(GET_COMMENTS_USE_CASE)
        .to(GetCommentsUseCase)
        .inSingletonScope();
    serviceLocator
        .bind<GetPersonsUseCase>(GET_PERSONS_USE_CASE)
        .to(GetPersonsUseCase)
        .inSingletonScope();
};
injectUsecase();

export { serviceLocator };
