import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CustomButton = ({style, title, onPress, disabled}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
