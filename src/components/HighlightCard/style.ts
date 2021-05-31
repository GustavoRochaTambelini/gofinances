import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface TypeProps{
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`    
    border-radius: ${RFValue(5)}px;
    width: ${RFValue(300)}px;

    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;

    margin-right: 16px;

    ${({type}) => type === 'total' ? css`
    background-color: ${({ theme }) => theme.colors.secundary};
    ` : css`
        background-color: ${({ theme }) => theme.colors.shape};
    `} 

`;

export const Header = styled.View`
    flex-direction : row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular}; 
    font-size: ${RFValue(14)}px;

    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text_dark };
`;

export const Icon = styled(Feather)<TypeProps>`
    font-size: 40px;

    ${({type}) => type === 'up' && css`color: ${({ theme }) => theme.colors.success}`}; 

    ${({type}) => type === 'down' && css`color: ${({ theme }) => theme.colors.attention}`}; 

    ${({type}) => type === 'total' && css`color: ${({ theme }) => theme.colors.shape}`}; 
`; 

export const Footer = styled.View`
    margin-top: ${RFValue(30)}px;
`;

export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;

    color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text_dark };
`;

export const LastTransaction = styled.Text<TypeProps>`
     font-family: ${({ theme }) => theme.fonts.regular};   
     font-size: ${RFValue(12)}px;

     color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text};
`;

