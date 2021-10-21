import React from 'react'

import { Text } from '../Themed';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/core';
import { E_AnimalStatus_Title, I_Animal, O_AnimalStatus_StatusColor, E_AnimalType } from '../../model/animal';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


interface I_AnimalCardProps {
    animal: I_Animal;
}

export const AnimalCard = ({ animal }: I_AnimalCardProps) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Animal', {id: animal.id})} activeOpacity={1} style={styles.cardContainer}>
            <View style={styles.header}>
                <View style={styles.informationContainer}>
                    <View style={styles.informationRow}>
                        <View style={styles.informationRow__bullet}/>
                        <Text style={styles.informationRow__text}>{animal.tipoGranja.descricao}</Text>
                    </View>
                    <View style={styles.informationRow}>
                        <View style={styles.informationRow__bullet}/>
                        <Text style={styles.informationRow__text}>{animal.localizacao}</Text>
                    </View>
                </View>
                {animal.tipoAnimal === E_AnimalType.SWINE
                    ? <MaterialCommunityIcons name="pig" size={24} color={Colors.pig_pink} />
                    : <FontAwesome5 name="kiwi-bird" size={24} color={Colors.chicken_yellow} />
                    // TODO: Alterar para componente
                }
            </View>
            <View style={styles.footer}>
                <View style={[styles.footer__status, {backgroundColor: O_AnimalStatus_StatusColor[animal.statusAnimal]}]}>
                    <Text style={styles.footer__statusText}>{E_AnimalStatus_Title[animal.statusAnimal]}</Text>
                </View>
                <Text style={styles.footer__animalName}>{animal.nome}</Text>
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
        backgroundColor: Colors.gray
    },

    footer__statusText: {

    },

    footer__animalName: {
        textDecorationLine: 'underline'
    },
});