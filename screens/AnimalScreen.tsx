import React from 'react'
import { StyleSheet } from "react-native";
import { AnimalDetailedCard } from '../components/AnimalDetailedCard';
import { ButtonCallModal } from '../components/ButtonCallModal';
import { InputContainer } from '../components/InputContainer';
import { PageContainer } from '../components/PageContainer';
import Animals from '../assets/animals.json';

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { I_Animal } from '../model/animal';

export function AnimalScreen({ navigation, route }: RootStackScreenProps<'Animal'>) {
    const animals: I_Animal[] = Animals;
    const animal: I_Animal = animals.find(animal => animal.id === route.params.id)!;

    return (
        <PageContainer 
            onBack={() => navigation.goBack()}
            contentBeforeBody={<AnimalDetailedCard animal={animal}/>}
        >
            <InputContainer 
                icon={'align-justify'}
                label={'Nome'}
                placeholder={'Nome do animal'}
            />
            <InputContainer 
                icon={'align-justify'}
                label={'Nome'}
                placeholder={'Nome do animal'}
            />
            <InputContainer 
                icon={'align-justify'}
                label={'Nome'}
                placeholder={'Nome do animal'}
                disabled
            />
            <ButtonCallModal 
                titleIcon={'alert-triangle'}
                title={'Status'}
                descriptionIcon={'alert-circle'}
                description={'Ativo'}
                onPress={console.log}
            />
            <ButtonCallModal 
                titleIcon={'alert-triangle'}
                title={'Status'}
                descriptionIcon={'alert-circle'}
                onPress={console.log}
            />
        </PageContainer>
    );
}
