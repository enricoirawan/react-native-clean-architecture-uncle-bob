import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import Theme from '../configuration/metrics/theme';

function PostCard({
    key,
    title,
    body,
    onPress
}: InferProps<typeof PostCard.propTypes>) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card key={key} style={styles.container}>
                <Card.Content>
                    <Title>{title}</Title>
                    <Paragraph>{body}</Paragraph>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.color.COLOR_SECONDARY,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 10
    }
});

PostCard.propTypes = {
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

PostCard.defaultProps = {};

export default PostCard;
