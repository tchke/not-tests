import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
 
@observer
export default class List extends React.Component {
    render() {
        const { store: { companies: items} } = this.props;
        return (
            <div>
                <ul>
                    {
                        items
                        && items.length > 0 
                        && items.map(i => this.renderItem(i))
                    }
                </ul>
                <Link to='/newcompany'>Add new company</Link>
            </div>
        ); 
        
    }

    renderItem(item) {
        return (
            <li key={item.id}>
                <Link to={`/company/${item.id}`}>{item.name}</Link>
                &nbsp;
                <Link to={`/company/edit/${item.id}`}>Edit</Link>
            </li>
        );
    }
}