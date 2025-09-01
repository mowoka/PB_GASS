/**
 * Sample React Native App with Navigation
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Providers } from './src/providers';

export default function App() {
  return (
    <Providers>
      <AppNavigator />
    </Providers>
  );
}
