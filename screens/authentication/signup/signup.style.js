import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../../constants";
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: COLORS.whiteText
    },
    formContainer:{
        padding: 20
    },
    registerContainer:{
        textAlign: "center",
        fontSize: SIZES.large,
        marginBottom: 30
    },
    nameInputRow:{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        marginBottom: 20
    },
    nameSection:{
        width: 150
    },
    smallTextInput:{
        borderWidth: 2,
        borderColor: COLORS.primary,
        padding: 5,
        borderRadius: 8,
        marginTop:8
    },
    emailAddress:{
        marginBottom: 20
    },
    textInput:{
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 8,
        marginTop: 8,
        padding: 5
    },
    dropdownContainer:{
        marginBottom: 20
    },
    dropdown:{
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 8,
        padding: 5,
        marginTop: 8,
    },
    contactContainer:{
        width: '100%',
        display: "flex",
        flexDirection: "row",
        gap: 5,
        marginBottom: 20
    },
    contactPreview:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    contactInput:{
        borderWidth: 2,
        width: '71%',
        padding: 5,
        borderRadius: 8
    },
    signUpText: {
        width: '100',
        marginBottom: 30
    },
    pressableText: {
       width: '100%',
       display: "flex",
       justifyContent: "center",
       flexDirection: "row"
    }

})

export default styles