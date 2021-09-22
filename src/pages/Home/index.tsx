import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';
import styles from './styles';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>educa+</Text>

        <MaterialIcons name="settings" size={24} color={colors.orange} />
      </View>

      <View style={styles.content}>
        <Text style={styles.classesTitle}>Suas aulas</Text>

        <ScrollView showsVerticalScrollIndicator={false} style={styles.cardsContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <View key={i} style={styles.card}>
              <Text style={styles.classTitle} numberOfLines={1}>
                Algoritmos e técnicas de programação
              </Text>

              <View style={styles.cardContent}>
                <View>
                  <View style={styles.infoContainer}>
                    <MaterialIcons name="school" size={18} color={colors.orange} />

                    <Text style={styles.infoLabel}>Lucas Ribamar</Text>
                  </View>

                  <View style={styles.infoContainer}>
                    <MaterialIcons name="event" size={18} color={colors.orange} />

                    <Text style={styles.infoLabel}>30/08/2021 - 18:00</Text>
                  </View>
                </View>

                <View style={styles.modalityIndicator}>
                  <Text style={styles.modality}>presencial</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <RectButton style={styles.searchClassButton}>
            <Text style={styles.buttonText}>Buscar nova aula</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};
