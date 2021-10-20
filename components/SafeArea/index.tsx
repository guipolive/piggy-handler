import React, { Fragment } from 'react';
import { LayoutChangeEvent, Platform, SafeAreaView as SafeAreaViewIOS, ViewStyle } from 'react-native';
import { SafeAreaView as SafeAreaViewAndroid } from 'react-native-safe-area-context';
import { Edge } from 'react-native-safe-area-context/lib/typescript/src/SafeArea.types';

interface ISafeAreaProps {
    isOnlyBottom?: boolean;
    style?: ViewStyle | ViewStyle[];
    useNativeSafeAreaForAndroid?: boolean;
    children: JSX.Element | JSX.Element[];
    onLayout?: (event: LayoutChangeEvent) => void;
}

const safeAreaIOS = (props: ISafeAreaProps) => {
    return (
        <SafeAreaViewIOS onLayout={props.onLayout} style={[props.style]}>
            {props.children}
        </SafeAreaViewIOS>
    );
};

const safeAreaAndroid = (props: ISafeAreaProps) => {
    const edges: ReadonlyArray<Edge> = ['left', 'right', 'bottom', 'top'];
    const edgesProps: ReadonlyArray<Edge> = props.isOnlyBottom ? ['bottom'] : edges;
    return (
        <SafeAreaViewAndroid onLayout={props.onLayout} edges={edgesProps} style={[props.style]}>
            {props.children}
        </SafeAreaViewAndroid>
    );
};

const SafeArea = (props: ISafeAreaProps): JSX.Element => {
    return (
        <Fragment>
            {Platform.select({
                ios: safeAreaIOS(props),
                android: props.useNativeSafeAreaForAndroid ? safeAreaIOS(props) : safeAreaAndroid(props),
                web: safeAreaIOS(props)
            })}
        </Fragment>
    );
}

export default SafeArea;
