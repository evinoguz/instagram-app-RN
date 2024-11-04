import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Story = ({story}) => {
  return (
    <View style={styles.story}>
      <LinearGradient style={styles.cover} colors={['#DE0046', '#F7A348']}>
        <Image source={{uri: story.user.avatar}} style={styles.avatar} />
      </LinearGradient>
      <Text numberOfLines={1} style={styles.username}>
        {story.user.name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  story: {
    width: 67,
    marginHorizontal: 8,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  username: {
    fontSize: 12,
  },
});
export default Story;
