import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image source={require={'./assets/logo.png'}} />
        <Text>Acesse sua conta</Text>
        <TextInput placeholder='coloque seu email' />
        <TextInput placeholder='coloque sua senha' />
        <Pressable><Text>logar</Text></Pressable>
        <Text>Ainda não possui uma conta?</Text>
        <Pressable onPress={}><Text>Criar cadastro</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
