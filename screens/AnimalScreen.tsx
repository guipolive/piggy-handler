import React from 'react'
import { StyleSheet } from "react-native";
import { AnimalDetailedCard } from '../components/AnimalDetailedCard';
import { PageContainer } from '../components/PageContainer';

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export function AnimalScreen({ navigation, route }: RootStackScreenProps<'Animal'>) {
    return (
        <PageContainer 
            onBack={() => navigation.goBack()}
            contentBeforeBody={<AnimalDetailedCard />}
        >
            <Text>Animal Screen</Text>
        </PageContainer>
    );
}
