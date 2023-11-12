import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    text1:{
        fontWeight: '500',
        fontSize: 15
    },
    text2:{
        fontSize: 14,
        fontWeight: '300'
    },
    text3:{
        fontSize: 12,
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