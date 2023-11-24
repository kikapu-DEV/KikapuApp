import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        padding: 20,
        height: '100%',
        backgroundColor: COLORS.whiteText
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 120,
        marginBottom: 20
    },
    backBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        height: 40,
        width: 40,
        borderColor: COLORS.grey
    },
    txt1:{
        fontSize: SIZES.large,
        fontWeight: '500'
    },
    cartItem:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.grey,
        marginBottom: 20
    },
    txt2:{
        fontWeight: '500'
    },
    txt3:{
        color: COLORS.secondary
    },
    mainSubContainer:{
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.grey
    },
    promo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: 30,
        padding: 10,
        marginBottom: 20
    },
    left:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    apply:{
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        borderRadius: 30,
        width: 70
    },
    applyTxt:{
        color: COLORS.whiteText
    },
    subtotalContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    subTotal:{
        color: COLORS.grey2,
    },
    amount: {
        fontSize: 15
    },
    subtotalContainer2:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    total2:{
        color: COLORS.grey2,
    }
})

export default styles;