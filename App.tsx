import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type StackParamList = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

function HomeScreen({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Home'>) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Push second"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

function SecondScreen({
  navigation,
}: NativeStackScreenProps<StackParamList, 'Second'>) {
  return (
    <View style={styles.container}>
      <Text>Second</Text>
      <Button title="Push third" onPress={() => navigation.navigate('Third')} />
    </View>
  );
}

function ThirdScreen() {
  return (
    <View style={styles.container}>
      <Text>Third - background the app and kill the process now</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
});
