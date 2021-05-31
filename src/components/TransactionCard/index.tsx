import React from 'react';
import {
    Component,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from './style';

interface Category{
    icon: string;
    name: string;    
}

interface Props{
    data:{
        title: string;
        amount: string;
        category: Category;
        date: string;
    }

}

export function TransactionCard({ data }: Props){
    return(
        <Component>
            <Title>{ data.title }</Title>
            <Amount>{ data.amount }</Amount>
            
            <Footer>
                <Category>
                    <Icon name="dollar-sign"/>
                    <CategoryName>{ data.category.name }</CategoryName>
                </Category>  
                <Date>{ data.date }</Date>  
           </Footer>
        </Component>
    )    
}