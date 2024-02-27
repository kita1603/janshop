import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
    const slides = [
        "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/28/1028092/Nuoc-Hoa.jpg",
        "https://cdn3.dhht.vn/wp-content/uploads/2023/09/Top-20-thuong-hieu-nuoc-hoa-nam-duoc-ua-chuong-nhat-hien-nay-30.jpg",
        "https://vn-live-02.slatic.net/p/6f18236030ae3e29e555e8047242920c.jpg",
    ]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{borderRadius: 15, width: "95%", marginTop: 15}}
                autoplay
                circleLoop
            />
        </View>
    )
}
export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: "center",
    }
}) 