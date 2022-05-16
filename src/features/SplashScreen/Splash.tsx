/**
 SPLASH SCREEN
 */
import React, { useEffect } from 'react';
import {View, Image, StatusBar} from 'react-native';
import * as IMG_CONST from './assets';
import * as Animatable from 'react-native-animatable';
import styles from './SplashStyle';

interface Props {
  navigation: any;
  id: string;
}

const Splash = (props: Props) => {

  useEffect(() => {
    props.navigation.navigate('LoginScreen')
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animatable.View useNativeDriver animation="zoomIn">
        <Image
          style={styles.appLogo}
          source={IMG_CONST.APP_LOGO}
          resizeMode="contain"
        />
      </Animatable.View>
    </View>
  );
};

export default Splash;
