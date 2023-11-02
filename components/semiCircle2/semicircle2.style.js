import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 200,
        margin: 0,
        padding: 0,
        borderRadius: 100,
        left: -80,
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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