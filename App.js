import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [gasPrice, setGasPrice] = useState('');
  const [ethanolPrice, setEthanolPrice] = useState('');
  const [result, setResult] = useState('');

  const comparePrices = () => {
    const gasValue = parseFloat(gasPrice);
    const ethanolValue = parseFloat(ethanolPrice);
    const ethanolPercentage = (ethanolValue / gasValue) * 100;

    if (ethanolPercentage < 70) {
      setResult('Vale a pena comprar etanol.');
    } else {
      setResult('Vale a pena comprar gasolina.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Preço da Gasolina:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gasPrice}
        onChangeText={setGasPrice}
      />

      <Text style={styles.label}>Preço do Etanol:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={ethanolPrice}
        onChangeText={setEthanolPrice}
      />

      <Button title="Comparar Preรงos" onPress={comparePrices} />

      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default App;
