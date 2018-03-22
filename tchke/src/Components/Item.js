import React from 'react';

export default class Item extends React.Component {
    render() {
        const company = { 
            id: 1, 
            name: 'company one' 
        };

        return (
            <div className='item'>
                {company.name}
            </div>
        );
    }
}