import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
    }, 

    searchIcon: {
        marginBottom: SIZES.small -2,
        marginHorizontal: 10,
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

    },

    searchImage: {
        resizeMode: "contain",
        width: SIZES.width -50,
        height: SIZES.height -300,
        opacity: 0.9
    }
});

export default styles