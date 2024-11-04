import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Bio = ({profileData}) => {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>{profileData?.user.name}</Text>
      <Text style={styles.descriptions}>{profileData?.user.bio}</Text>
      <Text style={styles.link}>{profileData?.user.link}</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.editBtn}>
        <Text style={styles.editText}>Profilini Düzenle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  name: {
    fontWeight: '700',
    color: '#000000',
  },
  descriptions: {
    marginVertical: 5,
    color: '#000000',
  },
  link: {
    fontWeight: '400',
    color: '#004C8B',
  },
  editBtn: {
    borderColor: '#CBCBCB',
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  editText: {
    fontWeight: '700',
    color: '#000000',
  },
});

export default Bio;
