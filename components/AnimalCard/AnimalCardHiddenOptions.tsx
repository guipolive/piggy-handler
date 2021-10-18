import React from 'react'

import { Text } from '../Themed';
import { TouchableOpacity, StyleSheet, View, ImageRequireSource, Image } from 'react-native';
import { Colors } from '../../constants/Colors';
import Images from '../../constants/Images';

export const AnimalCardHiddenOptions = () => {
    const renderOption = (icon: ImageRequireSource, label: string, color: string, onPress: () => void) => {
        return (
            <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: color }]} onPress={onPress}>
                <Image source={icon} style={{ height: 24, width: 24, marginBottom: 10 }} />
                <Text>{label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.row}>
            {renderOption(
                Images.delete,
                'Excluir',
                Colors.gray,
                () => console.log() /* TODO:  */
            )}
            {renderOption(
                Images.delete,
                'Excluir',
                Colors.gray,
                () => console.log() /* TODO:  */
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        height: 72,
        width: 72,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 30,
    },
});