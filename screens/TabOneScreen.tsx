import React from 'react'
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import {View as AnimatableView} from 'react-native-animatable';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { RootTabScreenProps } from "../types";
import { AnimalCard } from "../components/AnimalCard";

const teste = [0, 1, 2]

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <AnimatableView
            duration={500}
            useNativeDriver
            animation={"fadeInUpBig"}
            style={styles.container}
        >
            <SwipeListView
                data={teste}
                disableRightSwipe
                // onScroll={onScroll}
                previewRowKey={"0"}
                previewOpenDelay={3000}
                scrollEventThrottle={16}
                // refreshing={isRefreshing}
                style={styles.listContainer}
                // onScrollEndDrag={handleSnap}
                // ref={(ref) => ($flatListRef = ref)}
                showsVerticalScrollIndicator={false}
                // refreshControl={renderRefreshControl()}
                // ListFooterComponent={renderFooterLoading()}
                renderItem={(item) => (
                    <SwipeRow
                        disableRightSwipe
                        previewOpenValue={-50}
                        // disableLeftSwipe={item.item.isEmpty}
                        // rightOpenValue={isSmallIphone() ? -300 : -340}
                    >
                        <View >
                            <Text>Oi teste</Text>
                        </View>
                        <AnimalCard />
                        {/* <>{renderItem(item.item, item.index)}</> */}
                    </SwipeRow>
                )}
            />
        </AnimatableView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    listContainer: {
        flex: 1,
        width: '100%',
    },

    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
