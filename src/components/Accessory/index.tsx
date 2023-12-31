import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Container, Name } from './styles';

interface AccessoryItem {
  name: string;
  icon: React.FC<SvgProps>;
}

export const Accessory = ({ name, icon: Icon }: AccessoryItem) => {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
};
