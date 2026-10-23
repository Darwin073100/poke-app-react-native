import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
const icon = require('./assets/android-icon-foreground.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <TouchableHighlight
        underlayColor={"#09f"} 
        onPress={()=> alert('Hola')}>
          <Text style={{color: 'white', backgroundColor: 'blue', padding: 8, borderRadius: 4}}>Pulsar aqui</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
