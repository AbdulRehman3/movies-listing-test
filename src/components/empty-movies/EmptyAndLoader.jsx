import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const EmptyAndLoader = ({isLoading, isError}) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <Text style={styles.errorTitle}>No Movies</Text>
          <Text style={styles.errorMsg}>
            {isError
              ? 'There was an error loading the movies list.'
              : 'No movies found.'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  errorMsg: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default EmptyAndLoader;
