import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import { 
    Container, 
    Header,
    UserWalppers,
    UserInfo,
    Photo,
    User,
    UserSalutation,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';


export function Dashbord(){
    const data = [{
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00", 
        category: {
            icon: "dollar-sign",
            name: "Vendas",
        },
        date: "13/04/2020",
    },
    {
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00", 
        category: {
            icon: "dollar-sign",
            name: "Vendas",
        },
        date: "13/04/2020",
    },
    {
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00", 
        category: {
            icon: "dollar-sign",
            name: "Vendas",
        },
        date: "13/04/2020",
    },
    {
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00", 
        category: {
            icon: "dollar-sign",
            name: "Vendas",
        },
        date: "13/04/2020",
    },
    {
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00", 
        category: {
            icon: "dollar-sign",
            name: "Vendas",
        },
        date: "13/04/2020",
    }];
    return(
        <Container>
            <Header>
                <UserWalppers>
                    <UserInfo>
                        <Photo source={{uri:'https://avatars.githubusercontent.com/u/19539525?v=4'}}/>
                        <User>
                            <UserSalutation>Ola,</UserSalutation>
                            <UserName>Gustavo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWalppers>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    type="up"
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HighlightCard 
                    type="down"
                    title="Saídas" 
                    amount="R$ 1.259,00" 
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HighlightCard 
                    type="total"
                    title="Total" 
                    amount="R$ 16.141,00" 
                    lastTransaction="01 à 16 de abril"
                />
            </HighlightCards>
        
            <Transactions>
                <Title>Listagens</Title>
                <TransactionList
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                    showsVerticalScrollIndicator = {false}
                    contentContainerStyle={{
                        paddingBottom: getBottomSpace()
                    }}
                />        
            </Transactions>
        </Container>    
    )
}