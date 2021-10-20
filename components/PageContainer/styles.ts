import { StyleSheet } from 'react-native';
import { Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
    containerWrapper: {
        width: '100%',
        flex: 1,
        height: '100%',
        position: 'relative',
        backgroundColor: 'transparent',
    },

    header: {
        height: 55,
        flexGrow: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 24,
        flexBasis: 55,
    },

    actionIcon: {
        width: 27,
        height: 27,
        resizeMode: 'contain',
        tintColor: Colors.white,
    },
    
    closeIcon: {
        width: 15,
        height: 15,
        marginRight: 15,
        resizeMode: 'contain',
        tintColor: Colors.white,
    },
    
    scrollContainer: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        flexGrow: 1,
    },
    
    content: {
        position: 'relative',
        paddingTop: 40,
        paddingHorizontal: 14,
        flexGrow: 1,
    },
    
    fullWidthButton: {
        paddingHorizontal: 14,
        width: '100%',
        height: 50,
        backgroundColor: Colors.blue,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    fullWidthButton__text: {
        fontSize: 14,
        color: Colors.white
    },

    fullWidthButton__icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
});

export const textStyles = StyleSheet.create({
    headerTitle: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 20,
        flexShrink: 1
    },
    
    headerSave: {
        color: Colors.white,
        fontSize: 16,
        marginLeft: 20,
        flexGrow: 1
    },

    labelText: {
        color: Colors.black,
        fontSize: 16,
        paddingLeft: 12,
        marginBottom: 5
    },

    // dateText: {
    //     ...ApplicationStyles.texts.regularFont(16, colors.dark_grey70),
    //     marginLeft: 11,
    //     marginBottom: 20
    // } as TextStyle,

    // tagText: {
    //     ...ApplicationStyles.texts.regularFont(15, colors.white),
    // } as TextStyle,

    // modalTitle: {
    //     ...ApplicationStyles.texts.regularFont(20, colors.grey_dynamo),
    //     maxWidth: '100%'
    // },
});
