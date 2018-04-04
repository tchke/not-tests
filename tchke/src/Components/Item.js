import React from 'react';

export default class Item extends React.Component {
    render() {
        const { store } = this.props;
        const { id } = this.props;
        const company = store.companies.find((v) => v.id === id);
        return (
            <div className='item'>
                {company.name}
            </div>
        );
    }
}