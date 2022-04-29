import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';

interface CustomTextProps {
  customTextStyle?: TextStyle | TextStyle[];
  customTextType?: 'large' | 'medium' | 'small';
  children?: React.ReactNode;
}

const styles = StyleSheet.create({
  largeText: {
    fontSize: 22,
  },
  mediumText: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 14,
  },
});

function CustomText({
  children,
  customTextType,
  customTextStyle,
}: CustomTextProps) {
  let textType: {};
  switch (customTextType) {
    case 'large':
      textType = styles.largeText;
      break;
    case 'medium':
      textType = styles.mediumText;
      break;
    case 'small':
      textType = styles.smallText;
      break;
    default:
      textType = styles.mediumText;
      break;
  }

  return (
    <Text style={[customTextStyle, textType]}>{children || '텍스트'}</Text>
  );
}

export default CustomText;
