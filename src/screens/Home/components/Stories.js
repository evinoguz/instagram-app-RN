import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import stories from '../../../data/stories';
import Story from './Story';

const Stories = () => {
  return (
    <View style={styles.stories}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {stories?.map(story => (
          <Story story={story} key={story.id} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  stories: {
    paddingVertical: 10,
  },
});

export default Stories;
