import React, { useState } from "react";
import { Text, View, TextInput, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import google from "../../../../assets/google.png";
import facebook from "../../../../assets/facebook.png";
import linkedin from "../../../../assets/linkedin.png";

import styles from "./styles";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor="#CFCFCF"
          style={styles.input}
          onChangeText={(text) => setPass(text)}
          secureTextEntry
        />

        <View style={styles.footer}>
          <RectButton style={styles.searchClassButton}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </RectButton>
          <Text style={styles.p}>ou</Text>
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
