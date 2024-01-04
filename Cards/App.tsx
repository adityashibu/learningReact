/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ScrollCard';
import FancyCard from './components/FancyCard';
import ScrollFancyCards from './components/ScrollFancyCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ScrollFancyCards />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
