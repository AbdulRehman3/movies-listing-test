import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/button/CustomButton';
import EmptyAndLoader from '../components/empty-movies/EmptyAndLoader';
import Movie from '../components/movie/Movie';
import {fetchAll, fetchAllBySearch} from '../services/api.service';
import {parseApiResult} from '../utils/parseApiResult';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [loadedBy, setLoadedBy] = useState('');
  const [search, setSearch] = useState('');
  const [moviesList, setMoviesList] = useState([]);

  const loadAllMovies = async moviesType => {
    try {
      setIsLoading(true);
      setIsError(false);
      setSearch('');
      setMoviesList([]);
      setLoadedBy(moviesType);

      const result = await fetchAll(moviesType);
      const resultJson = await result.json();
      const parsedResult = parseApiResult(resultJson.results);
      setMoviesList(parsedResult);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const loadBySearch = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      setMoviesList([]);
      setLoadedBy('search');

      const result = await fetchAllBySearch(search);
      const resultJson = await result.json();
      const parsedResult = parseApiResult(resultJson.results);
      setMoviesList(parsedResult);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const openDetailScreen = movieId => {
    navigation.push('Detail', {
      id: movieId,
    });
  };

  useEffect(() => {
    loadAllMovies('top_rated');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Welcome to the Movies Listing</Text>
      <View style={styles.actionContainer}>
        <Text style={styles.hintText}>Load and search movies listing</Text>
        <View style={styles.actionButtons}>
          <CustomButton
            title="All Top Rated"
            onPress={() => loadAllMovies('top_rated')}
            style={[
              styles.actionBtn,
              loadedBy === 'top_rated' && styles.selectedType,
            ]}
            disabled={isLoading}
          />
          <CustomButton
            title="All Upcoming"
            onPress={() => loadAllMovies('upcoming')}
            style={[
              styles.actionBtn,
              loadedBy === 'upcoming' && styles.selectedType,
            ]}
            disabled={isLoading}
          />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search movies"
            value={search}
            onChangeText={text => setSearch(text)}
          />
          <CustomButton
            title="Search"
            onPress={loadBySearch}
            style={styles.actionBtn}
            disabled={isLoading || !search}
          />
        </View>
      </View>
      {loadedBy === 'search' && (
        <View>
          <Text style={styles.searchText}>Search: "{search}"</Text>
        </View>
      )}
      <FlatList
        style={styles.listContainer}
        data={moviesList}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Movie {...item} onDetailClick={() => openDetailScreen(item.id)} />
        )}
        ListEmptyComponent={
          <EmptyAndLoader isLoading={isLoading} isError={isError} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 10,
  },
  actionContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    padding: 16,
  },
  hintText: {
    fontSize: 16,
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  actionBtn: {
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: '#047cfc',
    borderStyle: 'solid',
    padding: 8,
    margin: 6,
    textAlign: 'center',
    color: '#047cfc',
  },
  selectedType: {
    color: '#fff',
    backgroundColor: '#047cfc',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    flexGrow: 1,
    fontSize: 16,
    margin: 6,
    paddingHorizontal: 5,
    flexWrap: 'wrap',
  },
  searchText: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  listContainer: {
    marginTop: 10,
  },
});

export default HomeScreen;
