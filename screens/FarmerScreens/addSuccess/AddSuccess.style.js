import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: COLORS.primary,
        // padding: 20,
    },
    header:{
        padding: 20,
        marginBottom: 20,
    },
    back:{
        borderWidth: 1,
        borderColor: COLORS.whiteText,
        borderRadius: 30,
        padding: 5,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body:{
        flex: 1,
        backgroundColor: COLORS.whiteText,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    img: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    txt:{
        fontWeight: '500',
        fontSize: SIZES.large,
        textAlign: 'center'
    },
    txt1:{
        fontSize: 13,
        padding: 10,
        textAlign: 'center'
    },
    row:{
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
        padding: 30,
        marginTop: 30
    },
    txt2:{
        fontWeight: '500'
    },
    txt3:{
        color: COLORS.secondary
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40
    },
    btn: {
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
    },
    txt4:{
        color: COLORS.whiteText
    }
})

export default styles;