import React from "react";
import { Text, View, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import landing from "../../../assets/landing.png";
import studentImg from "../../../assets/student.png";
import teacherImg from "../../../assets/teacher.png";

import styles from "./styles";

export const Intro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.classesTitle}>Olá, Samuel!</Text>

        <View style={styles.cardsContainer}>
          <Image style={styles.landing} source={landing} />
          <Text style={styles.whiteText}>
            No educa+ você pode encontrar professores de diversas áreas e também
            dar aulas online
          </Text>
          <View style={styles.menuButtons}>
            <RectButton style={styles.searchClassButton}>
              <Image style={styles.iconButton} source={studentImg} />
              <Text style={styles.buttonText}>sou</Text>
              <Text style={styles.buttonText2}>Aluno</Text>
            </RectButton>
            <RectButton style={styles.searchClassButton}>
              <Image style={styles.iconButton} source={teacherImg} />
              <Text style={styles.buttonText}>sou</Text>
              <Text style={styles.buttonText2}>Professor</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </View>
  );
};
