import React from 'react'

import { Text } from '../Themed';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/core';
import { DetailRow } from './DetailRow';

import { Feather } from '@expo/vector-icons'; 


export const AnimalDetailedCard = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Animal', {id: 2})} activeOpacity={1} style={styles.cardContainer}>
            <View style={styles.row}>
                <DetailRow description={'Pocilga Norte'} icon={'map-pin'} title={'Localização'} />
                <View style={styles.mainInformationRow}>
                    <Text style={styles.mainInformationRow__title}>SAX697</Text>
                    <Feather name="circle" size={24} color="black" />
                </View>
            </View>
            <View style={styles.row}>
                <DetailRow description={'Pocilga Norte'} icon={'map-pin'} title={'Localização'} />
                <DetailRow description={'Pocilga Norte'} icon={'map-pin'} title={'Localização'} />
            </View>
            <View style={styles.row}>
                <DetailRow description={'Pocilga Norte'} icon={'map-pin'} title={'Localização'} />
                <DetailRow description={'Pocilga Norte'} icon={'map-pin'} title={'Localização'} />
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

    row: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    mainInformationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainInformationRow__title: {
        textDecorationLine: 'underline',
        marginRight: 5
    },
});