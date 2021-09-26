import React, { useState } from "react";
import { Text, View, TextInput, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import google from "../../../../assets/google.png";
import facebook from "../../../../assets/facebook.png";
import linkedin from "../../../../assets/linkedin.png";
import { useNavigation } from "@react-navigation/core";

import styles from "./styles";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>educa+</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#CFCFCF"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#CFCFCF"
          style={styles.input}
          onChangeText={(text) => setPass(text)}
          secureTextEntry
        />

        <View style={styles.footer}>
          <RectButton style={styles.searchClassButton}>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
          <Text onPress={handleRegister} style={styles.p}>Cadastre-se</Text>
          <View style={styles.images}>
            <Image source={google} />
            <Image source={facebook} />
            <Image source={linkedin} />
          </View>
        </View>
      </View>
    </View>
  );
};
