import { StyleSheet } from "react-native"
import { COLORS } from "../../constants"

const styles = StyleSheet.create({
    menuCardContainer:{
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: COLORS.grey,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    menuTitle:{
        fontWeight: '500',
        fontSize: 17
    },
    menuSubTitle:{
        fontWeight: '500',
        marginTop: 10,
    },
    foodContent:{
        fontWeight: "300",
        marginBottom: 15
    },
    menuBtn:{
        width: 100,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        padding: 5
    },
    menuBtnText:{
        color: COLORS.whiteText,
        textAlign: "center"
    }
})

export default styles