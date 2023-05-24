import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Linking } from 'react-native';

export default function App() {
    return (
      <View style={styles.container}>
        <Image source={require={"./assets/bike.png"}} />
        <Text>BIKE INSANA </Text>
        <Text>R$ 140.00</Text>
        <Text>vendo bike insana muito boa mesmo</Text>
        <Text>email de contato: vendobikeinsana@hotmail.com</Text>
        <Text>número de contato: +55 (48)bike-insana</Text>
        <Text>aceito pix, boleto e dinheiro</Text>
        <Pressable onPress={}><Text>entrar em contato</Text></Pressable>

      </View>
    );
}
    