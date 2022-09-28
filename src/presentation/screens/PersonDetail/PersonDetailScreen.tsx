import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Card, Appbar, Text } from 'react-native-paper';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
    'pk.eyJ1IjoiZW5yaWNvaXJhd2FuIiwiYSI6ImNsOGZ6cjhoODAyengzdXE5NmloMnpoa2EifQ.N4efrnXaOLpR40NbKFzt9A'
);

import Theme from '../../configuration/metrics/theme';
import { PersonDetailScreenRouteProp } from '../../configuration/navigation/types';
import { ScrollView } from 'react-native-gesture-handler';

function PersonDetailScreen() {
    const navigation = useNavigation();
    const route = useRoute<PersonDetailScreenRouteProp>();
    const { person } = route.params;

    useEffect(() => {}, []);

    return (
        <ScrollView style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
                <Appbar.Content title={person.name} />
            </Appbar.Header>
            <Card style={styles.card}>
                <Card.Title title="Name" subtitle={person.name} />
                <Card.Title title="Email" subtitle={person.email} />
                <Card.Title title="Phone" subtitle={person.phone} />
                <Card.Title
                    title="Address"
                    subtitle={`${person.address.street} - ${person.address.suite} - ${person.address.city}`}
                />
                <Card.Title title="Company" subtitle={person.company.name} />
            </Card>
            <View style={styles.mapContainer}>
                <MapboxGL.MapView style={styles.map}>
                    <MapboxGL.Camera
                        zoomLevel={4}
                        centerCoordinate={[
                            parseFloat(person.address.geo.lat),
                            parseFloat(person.address.geo.lng)
                        ]}
                    />

                    <MapboxGL.PointAnnotation
                        id="points"
                        title={`${person.address.street} - ${person.address.suite} - ${person.address.city}`}
                        snippet={`${person.address.street} - ${person.address.suite} - ${person.address.city}`}
                        coordinate={[
                            parseFloat(person.address.geo.lat),
                            parseFloat(person.address.geo.lng)
                        ]}
                    >
                        <MapboxGL.Callout
                            title={`${person.address.street} - ${person.address.suite} - ${person.address.city}`}
                        />
                    </MapboxGL.PointAnnotation>
                </MapboxGL.MapView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.color.COLOR_PRIMARY,
        flex: 1
    },
    card: {
        margin: 10
    },
    mapContainer: {
        height: Dimensions.get('window').height / 2.5,
        width: '100%',
        padding: 10
    },
    map: {
        flex: 1
    },
    pointAnnotationContent: {
        backgroundColor: Theme.color.COLOR_WHITE,
        padding: 5,
        marginTop: 10,
        textAlign: 'center'
    }
});

PersonDetailScreen.propTypes = {};

PersonDetailScreen.defaultProps = {};

export default PersonDetailScreen;
