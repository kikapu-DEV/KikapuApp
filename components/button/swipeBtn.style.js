import { StyleSheet } from "react-native"
import { COLORS } from "../../constants"

const styles = StyleSheet.create({
    container:{
        width: 100, 
        height: 100, 
        backgroundColor: COLORS.whiteText, borderRadius: 5,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default styles