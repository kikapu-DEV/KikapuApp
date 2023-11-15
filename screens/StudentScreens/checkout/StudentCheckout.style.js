import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height:'100%',
        backgroundColor: COLORS.whiteText,
        padding: 20
    },
    headerContainer:{
        flexDirection: 'row',
        gap: 100,
        alignItems: 'center',
        marginBottom: 20
    },
    txt1:{
        fontWeight: '400',
        fontSize: 20
    },
    mainSubContainer:{
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.grey
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