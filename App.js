import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {StackNavigator} from './src/routes';
import {AppContextProvider} from './src/contexts';
import {useStatusbar} from './src/hooks';

const queryClient = new QueryClient();

export default function App() {
  useStatusbar();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AppContextProvider>
    </QueryClientProvider>
  );
}
