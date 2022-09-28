import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isReadyRef, navigationRef } from 'react-navigation-helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { BottomNavigatorParamList, RootStackParamList } from './types';
import HomeScreen from '../../screens/Home/HomeScreen';
import DetailScreen from '../../screens/Detail/DetailScreen';
import PersonScreen from '../../screens/Person/PersonScreen';
import PersonDetailScreen from '../../screens/PersonDetail/PersonDetailScreen';
import LoginScreen from '../../screens/Login/LoginScreen';

const RootStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

const TabNavigator: React.FC = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeStack') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'PersonScreen') {
                    iconName = focused
                        ? 'account-circle'
                        : 'account-circle-outline';
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
        })}
        initialRouteName="HomeStack"
    >
        <Tab.Screen
            name="HomeStack"
            component={HomeScreen}
            options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
            name="PersonScreen"
            component={PersonScreen}
            options={{ tabBarLabel: 'Person' }}
        />
    </Tab.Navigator>
);

const StackNavigator: React.FC = () => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="TabScreen" component={TabNavigator} />
        <RootStack.Screen name="DetailScreen" component={DetailScreen} />
        <RootStack.Screen
            name="PersonDetailScreen"
            component={PersonDetailScreen}
        />
    </RootStack.Navigator>
);

const Navigation: React.FC = () => {
    useEffect((): any => {
        return () => (isReadyRef.current = false);
    }, []);

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                isReadyRef.current = true;
            }}
        >
            <StackNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
