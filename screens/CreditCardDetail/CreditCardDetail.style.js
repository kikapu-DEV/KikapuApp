import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: COLORS.whiteText,
        padding: 20
    },
    header:{
        paddingBottom: 20,
    },
    txt1:{
        textAlign: 'center',
        fontSize: SIZES.large,
        fontWeight: '500'
    },
    cardDetailList:{
        marginTop: 80,
        marginBottom: 30,
        padding: 30
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 50,
        marginBottom: 20
    },
    txt2:{
        color: COLORS.grey2
    },
    txt3:{
        textAlign: 'center'
    },
    txt4:{
        textAlign: 'center',
        color: COLORS.red
    }
})

export default styles;