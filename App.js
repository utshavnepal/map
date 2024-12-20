
import { StyleSheet, Text, View } from 'react-native';
import RoootNavigator from './src/navigation/RootNavigators';
import { OriginContextProvider } from './src/contexts/Contexts'

export default function App() {
  return (
    <OriginContextProvider>
    <RoootNavigator />
</OriginContextProvider>
  );
}



