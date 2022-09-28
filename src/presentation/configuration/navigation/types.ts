import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Person } from '../../../domain/entity/Person';

export type RootStackParamList = {
    LoginScreen: undefined;
    TabScreen: undefined;
    DetailScreen: { postId: number };
    PersonDetailScreen: { person: Person };
};

export type BottomNavigatorParamList = {
    HomeStack: RootStackParamList;
    PersonScreen: undefined;
};

export type BottomNavigationProp = CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, 'DetailScreen'>,
    StackNavigationProp<RootStackParamList, 'PersonDetailScreen'>
>;

export type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'TabScreen'
>;

export type DetailScreenRouteProp = RouteProp<
    RootStackParamList,
    'DetailScreen'
>;

export type PersonDetailScreenRouteProp = RouteProp<
    RootStackParamList,
    'PersonDetailScreen'
>;
