import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ScreenWrapper = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
