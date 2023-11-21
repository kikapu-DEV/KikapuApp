import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    container:{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconBox:{
        backgroundColor: COLORS.whiteText,
        padding: 5,
        borderRadius: 50
    },
    img:{
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 30,
    }
})

export default styles;