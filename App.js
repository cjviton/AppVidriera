import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home"); // 👈 Cambia "Home" por tu pantalla principal
    }, 1000000); // ⏱️ 10 segundos

    return () => clearTimeout(timer); // limpiar el temporizador
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logoMovil.png')}
        style={styles.logo}
        resizeMode="contain" // 👉 mejor que "cover" para no deformar
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fondo blanco (puedes cambiarlo)
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {  
    width: '95%',   // 👈 dejamos 5% de margen a cada lado
    height: '100%',  // ocupa gran parte de la pantalla sin cortarse
  },
});
