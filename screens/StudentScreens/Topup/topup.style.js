import { StyleSheet } from "react-native";
import {COLORS} from '../../../constants'

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: COLORS.whiteText,
        padding: 20,
    },
    header:{
        paddingBottom: 20,
    },
    txt1:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    amountInput:{
        marginBottom: 100
    },
    textInput:{
        borderWidth: 1,
        borderColor: COLORS.primary,
        padding: 10,
        marginTop: 10,
    },
    txt2:{
        marginBottom: 20,
        fontWeight: '500'
    },
    mpesa:{
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: COLORS.lightGreen,
        marginBottom: 20,
        padding: 10,
        alignItems: "center"
    }
})

export default styles;