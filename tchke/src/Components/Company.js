import React from 'react';
import Item from './Item';
 
export default class Company extends React.Component {
    render() {      
        const { data = { id: 1, name: 'fake' } } = this.props;
        return <Item value={data} />;
    }
}