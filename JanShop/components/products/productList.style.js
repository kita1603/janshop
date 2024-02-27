import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },

    container: {
        alignItems: "stretch",
        paddingTop: SIZES.xxLarge,
        paddingLeft: SIZES.small,
        width: "100%"
        
    },

    separator: {
        height: 16
    }

})

export default styles;