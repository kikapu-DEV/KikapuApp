import { StyleSheet } from "react-native"
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: COLORS.whiteText
    },
    walletCardContainer:{
        padding: 30
    },
    walletCard:{
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        padding: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftContentText:{
        color: COLORS.whiteText,
        fontSize: 15
    },
    leftContentText2:{
        marginTop: 10,
        fontSize: 20,
        color: COLORS.whiteText
    },
    functionalityContainer:{
        padding: 10,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    }
})
export default styles;