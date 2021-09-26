import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';
import styles from './styles';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <RectButton onPress={handleGoBack}>
        <MaterialIcons name="arrow-back" size={24} color={colors.orange} />
      </RectButton>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};
