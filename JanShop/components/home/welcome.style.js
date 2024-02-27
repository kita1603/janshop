import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../../constants/index";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },

    welcomeText: (color, top) =>({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge -6,
        marginTop: top,
        color: color,
        marginHorizontal: SIZES.small
    }),

    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: SIZES.small ,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
    }, 

    searchIcon: {
        marginBottom: SIZES.small -4,
        marginHorizontal: 12,
        color: COLORS.gray,
        marginTop: SIZES.small
    },

    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    }, 

    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },

    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary

    }
})

export default styles