import postItImage from '@/assets/images/post-it-image.png';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {

  const router = useRouter()
  return (
    <View style={styles.container}>
      <Image source={postItImage} style={styles.image} />
      <Text style={styles.titulo}>Bienvenidos a mi aplicación</Text>
      <Text style={styles.subtitulo}>Captura tus datos en cualquier lugar y en cualquier momento</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('./notes')}
      >
        <Text style={styles.buttonText}>Comenzar</Text>
        

      </TouchableOpacity>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa"
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10
  },
  titulo: {
    fontSize: 28, 
    fontWeight: "bold",
    marginBottom: 10,
    color: "#343a40",
    textAlign: "center"

  },
  subtitulo: {
    fontSize: 16, 
    color: "#6c757d",
    textAlign: "center"

  },
  button: {
    backgroundColor: "#338bfeff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }

})

export default HomeScreen
