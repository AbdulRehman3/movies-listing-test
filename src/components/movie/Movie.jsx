import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const Pokemon = ({name, rating, releaseDate, poster, onDetailClick}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: poster,
            headers: {
              Accept: '*/*',
            },
          }}
        />
      </View>
      <View style={styles.detailContainer}>
        <View style={{width: 170}}>
          <Text style={styles.subTitle}>Name:</Text>
          <Text style={styles.movieName}>{name}</Text>
          <Text style={styles.subTitle}>Release Date:</Text>
          <Text>{releaseDate}</Text>
        </View>
        <View>
          <Text style={[styles.subTitle, styles.textRight]}>Rating:</Text>
          <Text style={[styles.level, styles.textRight]}>{rating}</Text>
          <Button title="Detail" onPress={onDetailClick} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  imageContainer: {
    alignItems: 'center',
    width: 70,
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    marginRight: 8,
  },
  icon: {
    resizeMode: 'contain',
    width: 70,
    height: 100,
    backgroundColor: '#fff',
  },
  detailContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  subTitle: {
    color: '#888',
  },
  movieName: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '700',
  },
  level: {
    fontSize: 30,
    fontWeight: '700',
  },
  textRight: {
    textAlign: 'right',
  },
});

export default Pokemon;
