/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ScrollCard';
import FancyCard from './components/FancyCard';
import ScrollFancyCards from './components/ScrollFancyCards';
import ActionCard from './components/ActionCard';
import ScrollActionCard from './components/ScrollActionCard';
import ContactList from './components/ContactList';
import WhatsappStyleCards from './components/WhatsappStyleCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>

        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ScrollFancyCards />
        <ActionCard />
        <ScrollActionCard />
        <ContactList />
        <WhatsappStyleCards />

      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
