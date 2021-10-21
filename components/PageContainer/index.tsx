import { Image, ImageBackground, ImageProps, ImageSourcePropType, ScrollView, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import React from 'react';

import SafeArea from '../SafeArea';
import { styles, textStyles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Colors} from '../../constants/Colors';
import { Images } from '../../constants/Images';

export enum OnBackIcon {
    BACK = 'arrow-left',
    CLOSE = 'x'
}

interface IFullWidthButtonProps {
    backgroundColor: string;
    type: 'center' | 'space-between';
    title: string;
    icon?: ImageSourcePropType;
    action: () => void;
    isInvisible?: boolean;
}

interface CustomScreenProps {
    onBack: () => void;
    onBackIcon?: OnBackIcon;
    title?: string;
    onAction?: () => void;
    onActionTitle?: string;
    onActionIcon?: ImageProps;
    onActionTitleIsLoading?: string;
    isLoading?: boolean;
    fullWidthButton?: IFullWidthButtonProps;
    contentBeforeBody?: any; /* TODO: Adicionar tipagem */
}

export const PageContainer: React.FC<CustomScreenProps> = (props) => {
    const renderContentBeforeBody = () => {
        return (
            <View style={styles.contentBeforeBodyWrapper}>
                {props.contentBeforeBody}
            </View>
        )
    }

    return (
        <ImageBackground source={Images.background} style={styles.containerWrapper}>
            <SafeArea style={styles.containerWrapper}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexShrink: 1 }}>
                        <TouchableOpacity onPress={() => props.onBack()}>
                            <Feather style={styles.closeIcon} name={props.onBackIcon ?? OnBackIcon.BACK} size={24} color={Colors.white} />
                        </TouchableOpacity>
                        <Text 
                            style={textStyles.headerTitle}
                            numberOfLines={1}
                        >
                            {props.title}
                        </Text>
                    </View>
                    <TouchableOpacity disabled={props.isLoading} onPress={props.onAction}>
                            {props.onActionTitle &&
                                <Text 
                                    style={textStyles.headerSave}
                                >
                                    {props.isLoading ? props.onActionTitleIsLoading : props.onActionTitle}
                                </Text>
                            }

                            {props.onActionIcon && 
                                <Image 
                                    source={props.onActionIcon!}
                                    style={styles.actionIcon}
                                />
                            }
                    </TouchableOpacity>
                </View>

                {props.contentBeforeBody && renderContentBeforeBody()}

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.content} >
                        {props.children}
                    </View>
                </ScrollView>

            </SafeArea>
        </ImageBackground>
    );
};
