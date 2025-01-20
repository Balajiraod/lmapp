import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center"
  }
});
