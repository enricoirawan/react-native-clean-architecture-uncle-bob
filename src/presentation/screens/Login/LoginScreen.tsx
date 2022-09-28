import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';
import Theme from '../../configuration/metrics/theme';
import Assets from '../../configuration/metrics/asset';

import {
    useAppDispatch,
    useAppSelector
} from '../../configuration/redux/hooks';
import { currentUser, login } from '../../configuration/redux/slice/UserSlice';
import { UserPayload } from '../../configuration/redux/payload/UserPayload';
import { HomeScreenNavigationProp } from '../../configuration/navigation/types';

const LoginScreen = () => {
    const user = useAppSelector(currentUser);
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const dispatch = useAppDispatch();

    const [auth, setAuth] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (user.token) {
            navigation.replace('TabScreen');
        }
    }, []);

    const loginUser = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            dispatch(login(new UserPayload('secret_token', 'Enrico Irawan')));
            navigation.replace('TabScreen');
        }, 2000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={Assets.image.reactNativeIcon} style={styles.logo} />
            <TextInput
                label="Username"
                mode="flat"
                autoCapitalize="none"
                keyboardType="name-phone-pad"
                value={auth.username}
                onChangeText={(text) =>
                    setAuth({
                        ...auth,
                        username: text
                    })
                }
            />
            <View style={styles.gap} />
            <TextInput
                label="Password"
                mode="flat"
                autoCapitalize="none"
                value={auth.password}
                secureTextEntry={true}
                onChangeText={(text) =>
                    setAuth({
                        ...auth,
                        password: text
                    })
                }
            />
            <View style={styles.gap} />
            <Button loading={loading} mode="elevated" onPress={loginUser}>
                Login
            </Button>
            <View style={{ marginBottom: 100 }} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.color.COLOR_PRIMARY,
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20
    },
    gap: {
        marginTop: 10
    }
});

export default LoginScreen;
