import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Title, Text } from 'react-native-paper';

import Theme from '../configuration/metrics/theme';
import Assets from '../configuration/metrics/asset';

function CommentItem({
    key,
    name,
    body
}: InferProps<typeof CommentItem.propTypes>) {
    return (
        <View key={key} style={styles.container}>
            <Image source={Assets.image.circleAvatar} style={styles.avatar} />
            <View style={styles.commentWrapper}>
                <Title style={styles.name}>{name}</Title>
                <Text style={styles.comment} ellipsizeMode="tail">
                    {body}
                </Text>
            </View>
        </View>
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
        width: 50,
        height: 50,
        marginRight: 10
    },
    commentWrapper: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    name: {
        maxWidth: Dimensions.get('screen').width / 2 + 100
    },
    comment: {
        maxWidth: '90%',
        maxHeight: 100
    }
});

CommentItem.propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

CommentItem.defaultProps = {};

export default CommentItem;
