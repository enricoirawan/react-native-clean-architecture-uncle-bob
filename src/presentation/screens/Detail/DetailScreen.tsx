import 'reflect-metadata';

import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { serviceLocator } from '../../../di/injection';
import {
    GetPostUseCase,
    GetPostUseCaseParams,
    GET_POST_USE_CASE
} from '../../../domain/usecase/GetPostUseCase';
import { Post } from '../../../domain/entity/Post';
import Theme from '../../configuration/metrics/theme';
import { DetailScreenRouteProp } from '../../configuration/navigation/types';
import {
    GetCommentsUseCase,
    GetCommentsUseCaseParams,
    GET_COMMENTS_USE_CASE
} from '../../../domain/usecase/GetCommentsUseCase';
import { Comment } from '../../../domain/entity/Comment';
import CommentItem from '../../components/CommentItem';
import CommentItemSkeleton from '../../components/CommentItemSkeleton';

function DetailScreen() {
    const navigation = useNavigation();
    const route = useRoute<DetailScreenRouteProp>();
    const { postId } = route.params;

    const [post, setPost] = useState<Post>();
    const [comments, setComments] = useState<Comment[]>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getPostDetail();
        getComments();
    }, []);

    const getPostDetail = async () => {
        setLoading(true);
        const getPostUseCase =
            serviceLocator.get<GetPostUseCase>(GET_POST_USE_CASE);
        const params = new GetPostUseCaseParams(postId);
        const post: Post = await getPostUseCase.execute(params);
        setPost(post);
        setLoading(false);
    };

    const getComments = async () => {
        setLoading(true);
        const getCommentUseCase = serviceLocator.get<GetCommentsUseCase>(
            GET_COMMENTS_USE_CASE
        );
        const params = new GetCommentsUseCaseParams(postId);
        const comments: Comment[] = await getCommentUseCase.execute(params);
        setComments(comments);
        setLoading(false);
    };

    const SkeletonLoading = () => (
        <Card.Content style={styles.skeletonLoadingCardContent}>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item marginLeft={20}>
                    <SkeletonPlaceholder.Item
                        width={200}
                        height={30}
                        borderRadius={4}
                    />
                    <SkeletonPlaceholder.Item
                        marginTop={6}
                        width={80}
                        height={30}
                        borderRadius={4}
                    />
                    <SkeletonPlaceholder.Item
                        marginTop={6}
                        width={200}
                        height={30}
                        borderRadius={4}
                    />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </Card.Content>
    );

    const CardContent = () => (
        <Card.Content>
            <Title>{post?.title}</Title>
            <Paragraph>{post?.body}</Paragraph>
        </Card.Content>
    );

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Appbar.Header>
                    <Appbar.BackAction
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                    <Appbar.Content
                        title={post?.title.substring(0, 9).toUpperCase()}
                        color="black"
                    />
                </Appbar.Header>
                <Card style={styles.cardContainer}>
                    {loading ? <SkeletonLoading /> : <CardContent />}
                </Card>
                <Paragraph style={styles.commentTitleSection}>
                    Comments
                </Paragraph>

                <ScrollView
                    style={styles.commentScrollContainer}
                    showsVerticalScrollIndicator={false}
                >
                    {loading
                        ? [1, 2, 3, 4, 5].map((item) => (
                              <CommentItemSkeleton key={item.toString()} />
                          ))
                        : comments?.map((comment: Comment) => (
                              <CommentItem
                                  key={comment.id.toString()}
                                  name={comment.name}
                                  body={comment.body}
                              />
                          ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.color.COLOR_PRIMARY,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    cardContainer: {
        margin: 10
    },
    commentTitleSection: {
        fontSize: 20,
        color: Theme.color.COLOR_WHITE,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    commentScrollContainer: {
        height: Dimensions.get('window').height / 1.75
    },
    skeletonLoadingCardContent: {
        paddingVertical: 10
    }
});

DetailScreen.propTypes = {};

DetailScreen.defaultProps = {};

export default DetailScreen;
