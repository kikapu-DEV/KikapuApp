import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.whiteText
    },
    detailContainer:{
        padding: 20,
    },
    detailSubContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txt1:{
        fontWeight: '500'
    },
    txt2:{
        color: COLORS.secondary,
        fontSize: 15
    },
    txt3:{
        color: COLORS.grey2,
        marginTop: 15
    },
    detailContainer2:{
        padding: 20,
        alignItems: 'center'
    },
    dSubContainer:{
        flexDirection: "row",
        gap: 10,
        // borderWidth: 1,
        padding: 10,
        width: 150

    }
})

export default styles;