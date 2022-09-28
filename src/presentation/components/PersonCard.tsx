import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import {
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { Title, Text } from 'react-native-paper';

import Assets from '../configuration/metrics/asset';
import Theme from '../configuration/metrics/theme';

function PostCard({
    key,
    onPress,
    name,
    email,
    city
}: InferProps<typeof PostCard.propTypes>) {
    return (
        <TouchableOpacity key={key} style={styles.container} onPress={onPress}>
            <Image source={Assets.image.circleAvatar} style={styles.avatar} />
            <View style={styles.commentWrapper}>
                <Title style={styles.name}>{name}</Title>
                <Text style={styles.email} ellipsizeMode="tail">
                    {email}
                </Text>
                <Text style={styles.city} ellipsizeMode="tail">
                    {city}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: Theme.color.COLOR_WHITE,
        borderRadius: 6,
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 10
    },
    avatar: {
        width: 70,
        height: 70,
        marginRight: 10
    },
    commentWrapper: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    email: {
        fontSize: 15,
        color: Theme.color.COLOR_BLACK,
        marginTop: -5,
        marginBottom: 2
    },
    city: {
        fontSize: 13,
        color: Theme.color.COLOR_GREY
    }
});

PostCard.propTypes = {
    key: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
};

PostCard.defaultProps = {};

export default PostCard;
