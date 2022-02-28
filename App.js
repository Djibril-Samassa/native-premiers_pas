import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View  style={styles.texts_container}>
        <Text style={styles.text1}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text2}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text3}>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  texts_container: {
    backgroundColor: 'white',
  },
  text1: {
    margin: 80,
    fontSize: 30,
  },
  text2: {
    margin: 80,
    textAlign: 'center'
  },
  text3: {
    margin: 80,
    fontWeight:'bold'
  }
});
