import React from 'react'
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

const teste = [0, 1, 2]

export function AnimalScreen({ navigation, route }: RootStackScreenProps<'Animal'>) {
    return (
        <Text>Animal Screen</Text>
    );
}
