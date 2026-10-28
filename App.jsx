import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Main } from './components/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center bg-blue-500">
        <StatusBar style='light' />
        <Main/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center', 
    // paddingTop: Constants.statusBarHeight
  },
});
