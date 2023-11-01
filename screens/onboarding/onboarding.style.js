import { StyleSheet } from "react-native";

import {COLORS, SIZES} from '../../constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: SIZES.medium,
        color: '#ffff',
        height: '100%'
    },
    companyName: {
        fontSize: SIZES.xxLarge,
        color: COLORS.whiteText,
        marginTop: SIZES.xxLarge,
        textAlign: 'center',
        paddingBottom: SIZES.large,
        fontWeight: "bold"
    },
    tagLine: {
        fontSize: SIZES.medium,
        color: COLORS.whiteText,
        textAlign: 'center',
        paddingBottom: SIZES.xLarge
    },
    basketImage: {
        marginTop: SIZES.dLarge,
        marginBottom: SIZES.ddLarge
    },
    onBoardLoginBtn: {
        width: 300,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: SIZES.medium,
        marginBottom: SIZES.small,
        marginLeft: "auto",
        marginRight:"auto",
        backgroundColor: COLORS.whiteText,
    },
    onBoardSignUpBtn: {
        width: 300,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.whiteText,
        marginTop: SIZES.medium,
        marginBottom: SIZES.medium,
        marginLeft: "auto",
        marginRight:"auto",
        backgroundColor: COLORS.primary,
    },
    btnText: {
        textAlign: 'center',
        fontSize: SIZES.medium
    }, 
    btnText2: {
        textAlign: 'center',
        fontSize: SIZES.medium,
        color: COLORS.whiteText
    }
})

export default styles