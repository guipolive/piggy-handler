import React from 'react'
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../Themed";
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';


interface IButtonCallModalProps {
    titleIcon: 'alert-triangle';
    title: string;
    descriptionIcon: 'alert-circle';
    description?: string;
    onPress: () => void;
}

export const ButtonCallModal = (props: IButtonCallModalProps) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <Feather name={props.titleIcon} size={24} color={Colors.gray} />
                <Text style={styles.title} >{props.title}</Text>
            </View>

            <View style={styles.actionsContainer}>
                {props.titleIcon && <Feather name={props.descriptionIcon} size={24} color={Colors.gray} />}
                <Text style={styles.description} >{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.gray,
        marginBottom: 10
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems:'center',
    },

    title: {
        marginLeft: 10
    },

    actionsContainer: {
        flexDirection: 'row',
        alignItems:'center',
        marginLeft: 10
    },
    
    description: {
        marginLeft: 10
    },

})