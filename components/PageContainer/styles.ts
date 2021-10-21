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

    contentBeforeBodyWrapper: {
        paddingVertical: 30,
        paddingHorizontal: 15
    },

    actionIcon: {},
    
    closeIcon: {
        marginRight: 15,
    },
    
    scrollContainer: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexGrow: 1,
    },
    
    content: {
        position: 'relative',
        paddingTop: 40,
        paddingHorizontal: 14,
        flexGrow: 1,
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
