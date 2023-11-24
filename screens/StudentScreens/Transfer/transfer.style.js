import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../../../constants';

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor: COLORS.whiteText,
        padding: 20
    },
    header:{
        flexDirection: 'row',
    },
    txt1:{
        marginLeft: 50,
        fontWeight: '400',
        fontSize: SIZES.large
    },
    user:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGreen,
        borderRadius: 20,
        padding: 20,
        marginTop: 50,
        marginBottom: 30,
    },
    left:{
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    TextInput:{
        padding: 30,
        textAlign: 'center',
        fontSize: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    btn:{
        // backgroundColor: COLORS.primary,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText:{
        color: COLORS.secondary,
        fontSize: 30
    },
    swipeBtnContainer:{
        marginTop: 30
    }
})

export default styles;