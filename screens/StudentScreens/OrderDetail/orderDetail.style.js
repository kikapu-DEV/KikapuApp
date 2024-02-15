import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        backgroundColor: COLORS.whiteText,
        padding: 20,
    },
    headerContainer:{
        flexDirection: 'row',
        gap: 80,
        alignItems: 'center',
        marginBottom: 20,
        fontWeight: 'bold'
    },
    txt1:{
        fontWeight: '400',
        fontSize: 20
    },
    content:{
        marginBottom: 10,
        borderRadius: 15,
        padding: 25,
        borderBottomWidth: 1,
        borderColor: COLORS.grey
    },
    text1:{
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 10
    },
    span:{
       fontWeight: '400'
    },
    text2:{
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5
    },
    amount:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text3:{
        fontSize: 14,
    },
    text4:{
        fontWeight:'normal',
        marginBottom: 5
    },
    text5:{
        color: COLORS.grey
    },
    statusBtn:{
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        width: 80,
        padding: 2,
        marginTop: 10

    },
    statusTxt:{
        color: COLORS.whiteText,
        textAlign: 'center',
        fontSize: 12,
    }
})
export default styles;