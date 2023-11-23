import { StyleSheet } from "react-native";
import {COLORS} from '../../../constants'

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: COLORS.primary,
        // padding: 20
    },
    header:{
        padding: 20,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt1:{
        color: COLORS.whiteText,
        textAlign: 'center',
        marginLeft: 100
    },
    body:{
        flex: 1,
        backgroundColor: COLORS.whiteText,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    txt2:{
        marginTop: 30
    },
    textInput: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.grey
    },
    cardRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 30
    },
    left:{
        width: 150
    }
})

export default styles;