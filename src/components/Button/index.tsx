import React from 'react';
import { Button } from 'react-native-paper';
import { theme } from "../../theme";
import { styles } from './styles';
import { DimensionValue } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: (data?: any) => void;
  width: DimensionValue;
  height?: number;
  icon?: string; 
  fontSize?: number;
};

export const CustomButton = ({ title, onPress, height, width, icon, fontSize }: CustomButtonProps) => {
  return (
    <Button
      style={{ width: width }}
      mode="contained"
      onPress={onPress}
      buttonColor={theme.colors.secondary}
      icon={icon ? icon : undefined} 
      contentStyle={{
        height: height || 50,
        justifyContent: 'center',
        alignItems: 'center', 
      }}
      labelStyle={{...styles.title, fontSize}}
    >
      {title}
    </Button>
  );
};