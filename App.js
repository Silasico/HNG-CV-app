import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Constants from "expo-constants"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import SplashScreen from "./screens/Splash"
import EditCVScreen from "./screens/EditCV"
import ViewCVScreen from "./screens/ViewCV"
import ContextProvider, { CVContext } from "./context"

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style = {styles.container}>
      <NavigationContainer>
        <ContextProvider>
          <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "Splash Screen" component = {SplashScreen} />
            <Stack.Screen name = "ViewCV" component = {ViewCVScreen} />
            <Stack.Screen name = "EditCV" component = {EditCVScreen} />
        </Stack.Navigator>
        </ContextProvider>
      </NavigationContainer>
      
      <StatusBar
        style = "light"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
