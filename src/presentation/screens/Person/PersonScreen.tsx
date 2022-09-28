import 'reflect-metadata';

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Theme from '../../configuration/metrics/theme';

import PersonCard from '../../components/PersonCard';
import { serviceLocator } from '../../../di/injection';
import {
    GetPersonsUseCase,
    GET_PERSONS_USE_CASE
} from '../../../domain/usecase/GetPersonsUseCase';
import { Person } from '../../../domain/entity/Person';
import { ScrollView } from 'react-native-gesture-handler';
import PersonItemSkeleton from '../../components/PersonItemSkeleton';
import { BottomNavigationProp } from '../../configuration/navigation/types';

function PersonScreen() {
    const navigation = useNavigation<BottomNavigationProp>();
    const [persons, setPersons] = useState<Person[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getPersons();
    }, []);

    const getPersons = async () => {
        setLoading(true);
        const getPersonsUseCase =
            serviceLocator.get<GetPersonsUseCase>(GET_PERSONS_USE_CASE);
        const persons: Person[] = await getPersonsUseCase.execute();
        setPersons(persons);
        setLoading(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {loading
                    ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
                          <PersonItemSkeleton key={item.toString()} />
                      ))
                    : persons.map((person: Person) => (
                          <PersonCard
                              key={person.id.toString()}
                              name={person.name}
                              email={person.email}
                              city={person.address.city}
                              onPress={() => {
                                  navigation.push('PersonDetailScreen', {
                                      person: person
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
    scrollView: {
        marginTop: 10
    }
});

PersonScreen.propTypes = {};

PersonScreen.defaultProps = {};

export default PersonScreen;
