import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

type StatisticCardProps = {
  percentage: number;
};

type SectionIndicatorProps = {
  positive: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: ${RFValue(82)}px;
  height: ${RFValue(37)}px;
`;

export const AvatarButton = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    border: 2px solid ${theme.COLORS.GRAY_200};
  `}
`;

export const StatisticCard = styled.TouchableOpacity<StatisticCardProps>`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme, percentage }) =>
    percentage >= 50 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 20px 16px;
  margin-top: 33px;
  border-radius: 8px;
`;

export const StatisticWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StatisticTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.G}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const StatisticSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const StatisticIcon = styled(ArrowUpRight).attrs({
  size: RFValue(24),
})`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(30)}px;
  margin-bottom: ${RFValue(10)}px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const SectionTitleWrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const SectionTitle = styled.Text`
  margin-top: ${RFValue(30)}px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE.S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const SectionItem = styled(TouchableOpacity)`
  flex-direction: row;
  padding: 10px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  margin-top: 5px;
  align-items: center;
`;

export const SectionItemDivider = styled.View`
  width: 1px;
  height: 100%;
  margin-right: ${RFValue(10)}px;
  margin-left: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const SectionHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const SectionName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY.M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const SectionIndicator = styled.View<SectionIndicatorProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, positive }) =>
    positive ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
