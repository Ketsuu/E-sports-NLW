import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  interface ButtonProps {
    title: string;
  }

  function Button(props: ButtonProps) {
    return (
      <TouchableOpacity>
        <Text>
          {props.title}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
      <Button title="Hello World" />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
