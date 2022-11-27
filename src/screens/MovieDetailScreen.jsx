import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {fetchById} from '../services/api.service';
import {parseSingleItem} from '../utils/parseApiResult';

const MovieDetailScreen = ({route}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);

  const loadDetail = async movieId => {
    try {
      setIsLoading(true);
      setIsError(false);
      setData(null);
      const result = await fetchById(movieId);
      const resultJson = await result.json();
      const parsedResult = parseSingleItem(resultJson);
      setData(parsedResult);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadDetail(route.params.id);
  }, [route.params.id]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingView}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          isError && (
            <View style={styles.loadingView}>
              <Text style={styles.title}>Error</Text>
              <Text style={[styles.content, {textAlign: 'center'}]}>
                Could not fetch the movie with the provided ID
              </Text>
            </View>
          )
        )}
        {data && (
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.logo}
                source={{
                  uri: data.poster,
                  headers: {
                    Accept: '*/*',
                  },
                }}
              />
            </View>
            <Text style={styles.title}>{data.name}</Text>
            <View
              style={{
                marginVertical: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}>
              <View>
                <Text style={styles.key}>Status</Text>
                <Text style={styles.value}>{data.status}</Text>
              </View>
              <View>
                <Text style={styles.key}>Release Data</Text>
                <Text style={styles.value}>{data.releaseDate}</Text>
              </View>
              <View>
                <Text style={styles.key}>Rating</Text>
                <Text style={styles.value}>{data.rating}</Text>
              </View>
              <View>
                <Text style={styles.key}>Revenue</Text>
                <Text style={styles.value}>{data.revenue}</Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text style={styles.key}>Languages</Text>
              {data.languages.map(lang => (
                <Text key={lang.iso_639_1} style={styles.content}>
                  {lang.english_name}
                </Text>
              ))}
            </View>
            <Text style={styles.content}>{data.overview}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
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
  },
  key: {
    fontSize: 16,
    color: '#888',
    marginTop: 16,
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 5,
  },
});

export default MovieDetailScreen;
