import React from 'react'

import { Text } from '../Themed';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/core';
import { DetailRow } from './DetailRow';

import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { E_AnimalStatus_Title, E_AnimalType, I_Animal } from '../../model/animal';

interface I_AnimalDetailedCardProps {
    animal: I_Animal;
}

export const AnimalDetailedCard = ({ animal }: I_AnimalDetailedCardProps) => {
    const navigation = useNavigation();
    const idade = '30 dias'; /* TODO: Deixar dinâmico com moment() */

    return (
        <TouchableOpacity activeOpacity={1} style={styles.cardContainer}>
            <View style={styles.row}>
                <DetailRow description={animal.localizacao} icon={'map-pin'} title={'Localização'} />
                <View style={styles.mainInformationRow}>
                    <Text style={styles.mainInformationRow__title}>{animal.nome}</Text>
                    {animal.tipoAnimal === E_AnimalType.SWINE
                        ? <MaterialCommunityIcons name="pig" size={24} color={Colors.pig_pink} />
                        : <FontAwesome5 name="kiwi-bird" size={24} color={Colors.chicken_yellow} />
                        // TODO: Alterar para componente
                    }
                </View>
            </View>
            <View style={styles.row}>
                <DetailRow description={idade} icon={'map-pin'} title={'Idade'} />
                <DetailRow description={animal.faseProducao.sigla} icon={'map-pin'} title={'Fase prod.'} />
            </View>
            <View style={styles.row}>
                <DetailRow description={E_AnimalStatus_Title[animal.statusAnimal]} icon={'map-pin'} title={'Status'} />
                <DetailRow description={animal.entradaPlantel} icon={'map-pin'} title={'Entrada'} />
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