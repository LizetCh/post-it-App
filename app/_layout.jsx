import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: '#338bfeff'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontSize:20,
      fontWeight: 'bold'
    },
    contentStyle:{
      paddingHorizontal: 10,
      paddingTop:10,
      backgroundColor: '#ffffffff'
      
    }

  }}
  >
    <Stack.Screen name='index' options={{title:'Mi App'}} />
    <Stack.Screen name='notes' options={{headerTitle:'Notas'}} />
  </Stack>
}

export default RootLayout