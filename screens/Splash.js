import { View, Text, Image, StyleSheet } from "react-native"
import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"

const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("ViewCV")
    }, 3000);
  }, [])
  
  return (
    <View style = {styles.container}>
      <Image
        source = {require("../assets/images/splash-icon.png")}
        style = {{width: 80, height: 80}}
        resizeMode = {"contain"}
      />
      <Text style = {{fontSize: 20, fontWeight: "bold", marginTop: 20}}>Mobile CV</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
})