import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

export const Component = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    padding: 18px 24px;
    margin-bottom: 16px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;

    color: ${({ theme }) => theme.colors.success};
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content : space-between;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(20)}px;
`;

export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-left:${RFValue(17)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const Date = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({ theme }) => theme.colors.text};
`;
