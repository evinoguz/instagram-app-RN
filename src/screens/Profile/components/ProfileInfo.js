import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileInfo = ({profileData}) => {
  return (
    <View style={styles.info}>
      <LinearGradient style={styles.cover} colors={['#DE0046', '#F7A34B']}>
        <Image
          source={{uri: profileData?.state.avatar}}
          style={styles.avatar}
        />
      </LinearGradient>
      <View style={styles.state}>
        <Text style={styles.stateNumber}>{profileData?.state.postCount}</Text>
        <Text style={styles.stateLabel}>gönderi</Text>
      </View>
      <View style={styles.state}>
        <Text style={styles.stateNumber}>{profileData?.state.follower}</Text>
        <Text style={styles.stateLabel}>takipçi</Text>
      </View>
      <View style={styles.state}>
        <Text style={styles.stateNumber}>{profileData?.state.follow}</Text>
        <Text style={styles.stateLabel}>takip</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  cover: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  state: {
    alignItems: 'center',
  },
  stateLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
  stateNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
});

export default ProfileInfo;
