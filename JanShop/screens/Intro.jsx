import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

const imagePaths = {
  fn1: require('../assets/images/Gucci.jpg'),
  fn2: require('../assets/images/Chanel.jpg'),
  fn3: require('../assets/images/Victoria.jpg'),
  fn4: require('../assets/images/janperfume.jpg'),
};

const SPLASH_DURATION = 3000;

const Intro = ({ navigation }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    const intervalId = setInterval(() => {
      if (currentImage < Object.keys(imagePaths).length - 1) {
        setCurrentImage(currentImage + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          SplashScreen.hideAsync();
          navigation.replace('Bottom Navigation');
        }, SPLASH_DURATION);
      }
    }, SPLASH_DURATION / Object.keys(imagePaths).length);

    return () => clearInterval(intervalId);
  }, [currentImage, navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={Object.values(imagePaths)[currentImage]}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Intro;
