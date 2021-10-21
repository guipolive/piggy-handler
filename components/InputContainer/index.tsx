import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Text } from '../Themed';

import React from 'react';

import {Colors} from '../../constants/Colors';

interface IInputContainerProps {
    icon: 'align-justify';
    label: string;
    placeholder: string;
    disabled?: boolean;
}

export const InputContainer = (props: IInputContainerProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Feather name={props.icon} size={24} color="black" />
                <Text style={styles.header__label}>{props.label}</Text>
            </View>
            <TextInput 
                style={styles.input}
                placeholder={props.placeholder}
                editable={!props.disabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6
    },

    header__label: {
        marginLeft: 4
    },

    input: {
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 7.5,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
});
