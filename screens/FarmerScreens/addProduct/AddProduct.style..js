import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../../../constants'

const styles = StyleSheet.create({
    container:{
        height:'100%',
        backgroundColor: COLORS.whiteText,
        padding: 20,
    },
    txt1:{
        textAlign: "center",
        fontWeight: '500',
        fontSize: SIZES.large,
        marginBottom: 40,
    },
    txt2:{
        fontSize: 15,
        marginBottom: 10
    },
    textInput:{
        borderBottomWidth: 1,
        borderColor: COLORS.grey,
        marginBottom: 30,
    },
    textInput2:{
        borderWidth: 1,
        borderColor: COLORS.grey,
        padding: 5,
        height: 150,
        marginBottom: 30
    }, 
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    textInput3:{
        borderBottomWidth: 1,
        borderColor: COLORS.grey,
        width: 200,
        padding: 10,
        fontSize: 15
    },
    dropdown:{
        borderBottomWidth: 1,
        borderColor: COLORS.grey,
        padding: 10,
        marginBottom: 30
    },
    row2:{
        flexDirection: 'row',
        justifyContent: "center",
        gap: 20
    },
    left2:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderStyle: 'dotted'
    }
})

export default styles;