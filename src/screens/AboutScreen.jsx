import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AboutLogo from '../assets/images/about-cover.png';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={AboutLogo} />
      </View>
      <Text style={styles.title}>Movies Listing</Text>
      <Text style={styles.content}>
        A simple movies listing app where you can view list of top rated movies
        and upcoming movies. You can also search movies and view detail of each.
        So view the movies list and choose one from.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  imageContainer: {
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 250,
    height: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 10,
  },
  content: {
    fontSize: 20,
    padding: 10,
  },
});

export default AboutScreen;
