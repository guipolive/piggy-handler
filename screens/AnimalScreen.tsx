import React from 'react'
import { StyleSheet } from "react-native";
import { AnimalDetailedCard } from '../components/AnimalDetailedCard';
import { ButtonCallModal } from '../components/ButtonCallModal';
import { InputContainer } from '../components/InputContainer';
import { PageContainer } from '../components/PageContainer';

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export function AnimalScreen({ navigation, route }: RootStackScreenProps<'Animal'>) {
    return (
        <PageContainer 
            onBack={() => navigation.goBack()}
            contentBeforeBody={<AnimalDetailedCard />}
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
