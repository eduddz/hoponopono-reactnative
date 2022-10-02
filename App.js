import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(106);

  async function clickToAdd() {
    if(count < 108) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  async function clickToReset() {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text>Hoponopono!</Text>
      <Text>{count}</Text>
      <Button onPress={clickToAdd} title="Add" />
      <Button onPress={clickToReset} title="Reset" />
      <Text>
        "Eu sinto muito,
      </Text>
      <Text>
        Eu me perdoo,
      </Text>
      <Text>
        Eu me amo,
      </Text>
      <Text>
        Eu sou grato!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
