import React from 'react'
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import Animals from '../assets/animals.json';
import {View as AnimatableView} from 'react-native-animatable';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import { RootTabScreenProps } from "../types";
import { AnimalCard } from "../components/AnimalCard";
import { AnimalCardHiddenOptions } from '../components/AnimalCard/AnimalCardHiddenOptions';
import { I_Animal } from '../model/animal';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

    const animals: I_Animal[] = Animals;

    return (
        <AnimatableView
            duration={500}
            useNativeDriver
            animation={"fadeInUpBig"}
            style={styles.container}
        >
            <SwipeListView
                data={animals}
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
                previewOpenValue={-25}
                rightOpenValue={-280}
                renderHiddenItem={item => (
                    <AnimalCardHiddenOptions />
                )}
                renderItem={({item: animal}) => (
                    <AnimalCard animal={animal} />
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
});
