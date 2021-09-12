import { RectButton } from 'react-native-gesture-handler';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background_secondary};
  position: relative;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  padding: 0 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    paddingBottom: 100,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${props => props.theme.fonts.secondary_500};
  color: ${props => props.theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${props => props.theme.fonts.secondary_500};
  color: ${props => props.theme.colors.title};
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${props => props.theme.fonts.secondary_500};
  color: ${props => props.theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${props => props.theme.fonts.secondary_500};
  color: ${props => props.theme.colors.main};
  font-size: ${RFValue(25)}px;
`;

export const Accessories = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const RentalPeriod = styled(RectButton)`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 24px;

  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.line};

  padding: 16px 0;
`;

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${props => props.theme.colors.main};

  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  font-family: ${props => props.theme.fonts.primary_500};
  color: ${props => props.theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text`
  font-family: ${props => props.theme.fonts.primary_500};
  color: ${props => props.theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  font-family: ${props => props.theme.fonts.primary_500};
  color: ${props => props.theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const RentalPriceQuota = styled.Text`
  font-family: ${props => props.theme.fonts.primary_500};
  color: ${props => props.theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${props => props.theme.fonts.secondary_600};
  color: ${props => props.theme.colors.success};
  font-size: ${RFValue(24)}px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${props => props.theme.colors.background_secondary};
`;
