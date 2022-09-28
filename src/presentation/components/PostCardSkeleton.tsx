import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Card } from 'react-native-paper';

import Theme from '../configuration/metrics/theme';

function PostCardSkeleton({
    key
}: InferProps<typeof PostCardSkeleton.propTypes>) {
    return (
        <Card key={key} style={styles.container}>
            <Card.Content>
                <SkeletonPlaceholder>
                    <SkeletonPlaceholder.Item marginLeft={20}>
                        <SkeletonPlaceholder.Item
                            width={120}
                            height={20}
                            borderRadius={4}
                        />
                        <SkeletonPlaceholder.Item
                            marginTop={6}
                            width={80}
                            height={20}
                            borderRadius={4}
                        />
                        <SkeletonPlaceholder.Item
                            marginTop={6}
                            width={120}
                            height={20}
                            borderRadius={4}
                        />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </Card.Content>
        </Card>
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

PostCardSkeleton.propTypes = {
    key: PropTypes.number.isRequired
};

PostCardSkeleton.defaultProps = {};

export default PostCardSkeleton;
