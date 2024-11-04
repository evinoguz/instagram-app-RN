import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './components/Header';
import ProfileInfo from './components/ProfileInfo';
import Bio from './components/Bio';
import Story from './components/Story';
import profileData from '../../data/profileData';
import posts from '../../data/posts';

const Index = () => {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;
  const renderProps = ({item}) => (
    <TouchableOpacity>
      <Image
        source={{uri: item.image}}
        style={{width: imageSize, height: imageSize, margin: 1}}
      />
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.container}>
      <Header profileData={profileData} />
      <ProfileInfo profileData={profileData} />
      <Bio profileData={profileData} />
      <Story profileData={profileData} />
      <View style={{flex: 1}}>
        <FlatList
          data={posts}
          keyExtractor={(item, i) => i.toString()}
          numColumns={numColumns}
          renderItem={renderProps}
          contentContainerStyle={styles.photoGrid}
          style={{marginTop: 15}}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  photoGrid: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
});
export default Index;
