import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 200,
        backgroundColor: COLORS.primary,
        margin: 0,
        padding: 0,
        borderRadius: 100,
        left: -60,
        top: -30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    circleText: {
        color: COLORS.whiteText,
        textAlign: "center"
    },
    btnContainer: {
        marginBottom: 10
    },
    backBtn:{
        width: 40,
        height: 40
    }
})

export default styles