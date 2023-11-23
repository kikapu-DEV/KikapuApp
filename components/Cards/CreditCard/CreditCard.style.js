import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.lightGreen,
        padding: 20,
        marginTop: 20,
        borderRadius: 20
    },
    txt1:{
        marginBottom: 50,
        fontWeight: '500'
    },
    row:{
        flexDirection: "row",
        justifyContent: 'space-between',
    }
})

export default styles;