import { StyleSheet } from "react-native"
import { COLORS } from "../../../constants"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.whiteText,
    },
    closeBtnContainer:{
        marginLeft: 20,
        marginTop: 20,
    },
    contentContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    text1:{
        marginTop: 20,
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 18
    },
    text2:{
        width: 280,
        textAlign: "center",
        marginBottom: 20
    },
    text3:{
        fontWeight: '500',
    }
})

export default styles