import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BackButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Back</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 55,
    left: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'blue',
    zIndex: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default BackButton;
