import 'reflect-metadata';

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { serviceLocator } from '../../../di/injection';
import { Post } from '../../../domain/entity/Post';
import {
    GetPostsUseCase,
    GET_POSTS_USE_CASE
} from '../../../domain/usecase/GetPostsUseCase';
import PostCard from '../../components/PostCard';
import Theme from '../../configuration/metrics/theme';
import PostCardSkeleton from '../../components/PostCardSkeleton';
import { BottomNavigationProp } from '../../configuration/navigation/types';
import {
    useAppDispatch,
    useAppSelector
} from '../../configuration/redux/hooks';
import { currentUser, logout } from '../../configuration/redux/slice/UserSlice';

function HomeScreen() {
    const user = useAppSelector(currentUser);
    const dispatch = useAppDispatch();

    const navigation = useNavigation<BottomNavigationProp>();

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        setLoading(true);
        const getPostsUseCase =
            serviceLocator.get<GetPostsUseCase>(GET_POSTS_USE_CASE);
        const postList: Post[] = await getPostsUseCase.execute();
        setPosts(postList);
        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Welcome, {user.username}</Text>
                <Icon
                    name="exit-to-app"
                    size={25}
                    color={Theme.color.COLOR_WHITE}
                    onPress={() => {
                        dispatch(logout());
                        navigation.replace('LoginScreen');
                    }}
                />
            </View>

            <ScrollView>
                {loading
                    ? [1, 2, 3, 4, 5, 6, 7].map((key) => (
                          <PostCardSkeleton key={key} />
                      ))
                    : posts.map((post: Post) => (
                          <PostCard
                              key={post.id.toString()}
                              title={post.title}
                              body={post.body}
                              onPress={() => {
                                  navigation.push('DetailScreen', {
                                      postId: post.id
                                  });
                              }}
                          />
                      ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.color.COLOR_PRIMARY,
        flex: 1
    },
    welcomeText: {
        fontSize: 20,
        color: 'white',
        marginBottom: '3%',
        marginTop: '5%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    }
});

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
