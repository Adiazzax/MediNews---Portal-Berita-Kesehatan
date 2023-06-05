import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import About from './src/About/About';

export default function App() {
  return (
    <ScrollView>
      <View>
        {/* <Text>Hello World!</Text> */}
        <About />
      </View>
    </ScrollView>
  );
}
