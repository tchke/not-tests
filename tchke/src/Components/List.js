import React from 'react';
import { Link } from 'react-router-dom';
 
export default class List extends React.Component {
    render() {
        const { items } = this.props;
        return (
            <ul>
                {
                    items 
                    && items.map(i => this.renderItem(i))
                }
            </ul>
        ); 
        
    }

    renderItem(item) {
        return (
            <li key={item.id}>
                <Link to={`/company/${item.id}`}>{item.name}</Link>
            </li>
        );
    }
}