import React from 'react';
import List from './List';
import companies from '../companies';
 
export default class Companies extends React.Component {
    render() {      
        return <List items={companies} />;
    }
}