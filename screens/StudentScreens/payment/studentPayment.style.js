import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: COLORS.whiteText,
        padding: 30
    },
    logo:{
        justifyContent: "center",
        alignItems: "center"
    },
    text1:{
        textAlign: "center",
        fontSize: 20,
        color: COLORS.primary,
        marginBottom: 20
    },
    text2:{
        textAlign: "center",
        color: COLORS.grey2,
    },
    smallAvatar:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    text4:{
        textAlign: "center",
        marginTop: 30
    },
    inputContainer:{
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    inputBox:{
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: 10,
        padding: 5,
        width: 250
    },
    promoTexts: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text5:{
        color: COLORS.grey
    },
    text6:{
        color: COLORS.secondary
    },
    totalBox:{
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: COLORS.lightGreen,
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "space-between",
        flexDirection: "row"    
    }
})
export default styles;