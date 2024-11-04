import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Story = ({profileData}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.main}>
      {profileData?.story?.map((item, i) => {
        return (
          <View key={i} style={styles.storyView}>
            <View style={styles.box}>
              <Image style={styles.img} source={{uri: item.img}} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        );
      })}
      <View style={styles.storyView}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.newStoryBtn}>
            <Text style={styles.plusIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 15,
  },
  storyView: {
    marginRight: 10,
    alignItems: 'center',
  },
  box: {
    borderColor: '#DCDCDC',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  title: {
    color: '#000000',
    marginTop: 3,
  },
  plusIcon: {
    fontSize: 30,
  },
  newStoryBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Story;
