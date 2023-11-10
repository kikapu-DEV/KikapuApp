import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.whiteText
    },
    profileContainer:{
        marginTop: 80,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    profileIcon:{
        position: "relative",
    },
    changeBtn:{
        backgroundColor: COLORS.secondary,
        alignItems: "center",
        padding: 5,
        position: "absolute",
        top: 60,
        left: 20
    },
    changeTxt:{
        color: COLORS.whiteText
    },
    profileName: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        marginBottom: 40
    },
    pNameTxt:{
        fontWeight: '500',
        fontSize: 15
    },
    profileList:{
        paddingLeft: 50,
        paddingRight: 50,
    },
    list:{
        marginBottom: 40,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftList:{
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    icon:{
        // elevation: 10,
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: 50,
        padding: 4
    },
    lTexts:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
    },
    logout:{
        color: COLORS.secondary,
        fontSize: 15
    },
    delete:{
        color: COLORS.red,
        fontSize: 15,
        marginTop:10
    }
})

export default styles;