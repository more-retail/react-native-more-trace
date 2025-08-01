import Trace from 'react-native-more-trace';
import { Text, View, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    Trace.init({
      api_key: 'RGVmYXVsdEFwaUtleQ==',
      url: 'https://trace.dev.more.in',
      env: 'dev',
    });
    Trace.setUserId('113425235');

    Trace.trackEvents('test', { sdjn: 'dsagasdg' });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
