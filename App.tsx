import * as React from 'react';
import { View, Text, Button, StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './app/navigations/Navigation';
import defailtStyles from './app/styles/defailtStyles';
import { AuthProvider } from './app/context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <SafeAreaView style={styles.SafeAreaView}>
        <StatusBar backgroundColor={defailtStyles.colors.praimaryColor} />
        <Navigation />
      </SafeAreaView >
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});

export default App;