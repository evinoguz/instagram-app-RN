import React from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;
const ratio = 1080 / width;
const height = 607 / ratio;
const FitImage = ({src}) => {
  return <Image style={styles.img} source={{uri: src}} />;
};
const styles = StyleSheet.create({
  img: {
    width,
    height,
  },
});
export default FitImage;
