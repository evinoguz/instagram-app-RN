import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Bookmark, Comment, Dots, Heart, Share} from '../../Icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const Post = ({post}) => {
  return (
    <View style={styles.mypost}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image source={{uri: post?.user?.avatar}} style={styles.avatar} />
          <Text style={styles.title}>{post?.user.name}</Text>
        </View>
        <Dots />
      </View>
      <FitImage src={post?.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity activeOpacity={0.7}>
              <Heart size={24} count={post?.likes} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Comment count={post?.comments} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Share count={post?.shares} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Bookmark />
          </TouchableOpacity>
        </View>
        <ReadMore
          seeLessText="^"
          seeLessStyle={{color: '#999'}}
          seeMoreText="Devamı"
          seeMoreStyle={{color: '#999'}}
          numberOfLines={2}>
          <Text style={styles.user} key={post.id}>
            {post?.user.name}
          </Text>
          {' ' + post?.description}
        </ReadMore>
        <View>
          <Text style={styles.date}>{dayjs(post?.date).fromNow()}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mypost: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  leftActions: {
    flexDirection: 'row',
    gap: 10,
  },
  likes: {
    fontWeight: '600',
    marginVertical: 4,
  },
  user: {
    fontWeight: '600',
  },
  comments: {
    marginTop: 3,
    opacity: 0.5,
  },
  date: {
    fontSize: 13,
    opacity: 0.5,
  },
  translation: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 7,
  },
});

export default Post;
