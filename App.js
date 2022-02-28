import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function App() {

  const handlePress = () =>{
    alert("Merci")
  }

  return (
    <ScrollView  style={styles.scrollview}>
      <View  style={styles.texts_container}>
        <Text style={styles.text1}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text2}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text3}>Open up App.js to start working on your app!</Text>
        <TouchableOpacity onPress={() => handlePress()}><Text style={styles.text2}>Appuyez</Text></TouchableOpacity>
        <ActivityIndicator></ActivityIndicator>
        <View style={styles.imagescomponent}>
          <Image
					style={styles.img}
					source={{
						url: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
					}}
				/>
        <Image
					style={styles.img}
					source={require("./assets/favicon.png")}
				/>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: 'blue',
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
  },
	img: {
		height: 100,
		width:100,
	},
  imagescomponent: {
    backgroundColor: 'red',
  }
});
