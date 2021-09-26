import React from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/core';
import { MaterialIcons } from '@expo/vector-icons';

import { Header, MaterialButton } from '../../components';

import whatsAppImage from '../../../assets/whatsapp-white.png';

import styles from './styles';
import colors from '../../styles/colors';

interface Params {
  classId: number;
}

export const Class = () => {
  const routes = useRoute();
  const { classId } = routes.params as Params;

  const materials = [
    { id: 1, url: 'string', title: 'Teoria Musical', type: 'pdf' },
    { id: 2, url: 'string', title: 'Introdução à Teoria Musical', type: 'video' },
    { id: 3, url: 'string', title: 'Introdução à Teoria Musical', type: 'img' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Algoritmos e técnicas de programação" />

      <View style={styles.main}>
        <View style={styles.cardContent}>
          <View>
            <View style={styles.infoContainer}>
              <MaterialIcons name="school" size={22} color={colors.orange} />

              <Text style={[styles.infoLabel, styles.teacherName]} numberOfLines={1}>
                Lucas Ribamar
              </Text>
            </View>

            <View style={styles.infoContainer}>
              <MaterialIcons name="event" size={22} color={colors.orange} />

              <Text style={styles.infoLabel}>30/08/2021 - 18:00</Text>
            </View>

            <View style={styles.infoContainer}>
              <MaterialIcons name="monetization-on" size={22} color={colors.orange} />

              <Text style={styles.infoLabel}>R$ 50,00</Text>
            </View>
          </View>

          <View style={styles.modalityIndicator}>
            <Text style={styles.modality}>presencial</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Material complementar</Text>

            <View>
              <FlatList
                data={materials}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <MaterialButton title={item.title} url={item.url} type={item.type} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Conteúdo da Aula</Text>

            <Text style={styles.classDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde vel
              cumque ducimus animi laudantium, saepe, enim asperiores illo nulla repellat
              fugiat inventore fugit reprehenderit repudiandae delectus. Suscipit,
              repudiandae minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio esse dolores ad atque earum error, iure dolor similique. Velit minus
              dolores laudantium ipsum. Quae nostrum cumque ab possimus ipsam magni.
              repudiandae minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio esse dolores ad atque earum error, iure dolor similique. Velit minus
              dolores laudantium ipsum. Quae nostrum cumque ab possimus ipsam magni.
              repudiandae minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio esse dolores ad atque earum error, iure dolor similique. Velit minus
              dolores laudantium ipsum. Quae nostrum cumque ab possimus ipsam magni.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <RectButton style={styles.getInContactButton}>
            <View style={styles.whatsAppIconContainer}>
              <Image source={whatsAppImage} />
            </View>

            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>Entre em contato com o professor</Text>
            </View>
          </RectButton>
        </View>
      </View>
    </SafeAreaView>
  );
};
