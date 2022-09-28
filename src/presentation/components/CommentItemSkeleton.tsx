import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import Theme from '../configuration/metrics/theme';

function CommentItemSkeleton({
    key
}: InferProps<typeof CommentItemSkeleton.propTypes>) {
    return (
        <View key={key} style={styles.container}>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                    flexDirection="row"
                    alignItems="center"
                >
                    <SkeletonPlaceholder.Item
                        width={60}
                        height={60}
                        borderRadius={50}
                    />
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
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
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
    }
});

CommentItemSkeleton.propTypes = {
    key: PropTypes.string.isRequired
};

CommentItemSkeleton.defaultProps = {};

export default CommentItemSkeleton;
