import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: COLORS.grey,
        width: 80,
        borderRadius: 20
    },
    sign:{
        fontSize: 20,    }
})

export default styles;