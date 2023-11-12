import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.whiteText,
        padding: 20
    },
    title:{
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default styles;