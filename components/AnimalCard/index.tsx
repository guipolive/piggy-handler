import React from 'react'

import { Text } from '../Themed';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export const AnimalCard = () => {
    return (
        <TouchableOpacity activeOpacity={1} style={styles.cardContainer}>
            <View style={styles.header}>
                <View style={styles.informationContainer}>
                    <View style={styles.informationRow}>
                        <View style={styles.informationRow__bullet}/>
                        <Text style={styles.informationRow__text}>Ciclo completo</Text>
                    </View>
                    <View style={styles.informationRow}>
                        <View style={styles.informationRow__bullet}/>
                        <Text style={styles.informationRow__text}>Pocilga/NORTE</Text>
                    </View>
                </View>
                <View style={styles.animalType}></View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footer__status}>
                    <Text style={styles.footer__statusText}>Ativo</Text>
                </View>
                <Text style={styles.footer__animalName}>SAX8694</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 15,
        marginHorizontal: 20,
        backgroundColor: Colors.white,
        
        elevation: 3,
        shadowRadius: 2.22,
        shadowColor: Colors.black,
        shadowOpacity: .5,
        shadowOffset: {
            width: 0,
            height: 1,
        }
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    informationContainer: {

    },

    informationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    
    informationRow__bullet: {
        width: 7,
        height: 7,
        borderRadius: 50,
        backgroundColor: Colors.gray
    },

    informationRow__text: {
        marginLeft: 5
    },

    animalType: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: Colors.gray
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },

    footer__status: {
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: Colors.red
    },

    footer__statusText: {

    },

    footer__animalName: {
        textDecorationLine: 'underline'
    },
});