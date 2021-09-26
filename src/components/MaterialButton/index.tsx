import React from 'react';
import { Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import imageIcon from '../../../assets/image.png';
import pdfIcon from '../../../assets/pdf.png';
import videoIcon from '../../../assets/video.png';

import styles from './styles';

interface MaterialProps {
  url: string;
  title: string;
  type: string;
}

export const MaterialButton = ({ url, title, type }: MaterialProps) => {
  const selectFileImage = () => {
    return {
      img: imageIcon,
      pdf: pdfIcon,
      video: videoIcon,
    }[type];
  };

  return (
    <RectButton style={styles.button}>
      <Image source={selectFileImage()} />

      <Text style={styles.buttonText} numberOfLines={1}>
        {title}
      </Text>
    </RectButton>
  );
};
