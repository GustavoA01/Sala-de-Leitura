import React from 'react';
import { Button } from 'react-native-paper';
import { theme } from "../../theme";
import { styles } from './styles';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  height?: number;
  width?: number;
  icon?: string; 
};

export const CustomButton = ({ title, onPress, height, width, icon }: CustomButtonProps) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      buttonColor={theme.colors.secondary}
      icon={icon ? icon : undefined} 
      contentStyle={{
        height: height || 50,
        width: width || '100%',
        justifyContent: 'center',
        alignItems: 'center', 
      }}
      labelStyle={styles.title}
    >
      {title}
    </Button>
  );
};
