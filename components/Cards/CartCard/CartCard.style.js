import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 30
    },
    foodImg:{
        backgroundColor: COLORS.lightGreen,
        borderRadius: 10,
        padding: 10,
        width: 150,
        justifyContent: 'center',
        alignItems: "center"
    },
    txt1:{
        fontWeight: '400',
        fontSize: 15,
        marginBottom: 10,
        color: COLORS.primary
    },
    txt2:{
        marginBottom: 30,
        fontSize: 14
    }
})

export default styles;