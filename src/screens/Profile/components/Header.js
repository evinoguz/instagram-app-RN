import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BurgerMenu, Dropdown, Plus} from '../../../Icons';

const Header = ({profileData}) => {
  return (
    <View style={styles.header}>
      <View style={styles.userLeft}>
        <Text style={styles.username}>{profileData?.user.username}</Text>
        <Dropdown />
      </View>
      <View style={styles.userRight}>
        <TouchableOpacity activeOpacity={0.7}>
          <Plus size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <BurgerMenu />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  userRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
