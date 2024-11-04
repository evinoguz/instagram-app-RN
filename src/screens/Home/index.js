import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Stories from './components/Stories';
import Post from '../../components/shared/Post';
import posts from '../../data/posts';

const Index = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Stories />
        {posts?.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default Index;
