import React from 'react'

import { Text } from '../../Themed';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../../constants/Colors';

import { Feather } from '@expo/vector-icons'; 

interface IDetailRowProps {
    icon: 'map-pin';
    title: string;
    description: string;
}

export const DetailRow = (props: IDetailRowProps) => {

    return (
        <View style={styles.container}>
            <Feather name={props.icon} size={24} color="black" />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        marginLeft: 10
    },
    title: {
        color: Colors.gray,
        marginBottom: 4
    },
    description: {
        color: Colors.black,
    },
});