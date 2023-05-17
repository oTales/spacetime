import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-black flex-1 items-center justify-center">
      <Text className="text-zinc-50 font-bold text-6xl" >Tales</Text>
      <StatusBar style="auto" translucent />
    </View>
  );
}
