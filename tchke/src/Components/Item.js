import React from 'react';

export default class Item extends React.Component {
    render() {
        const { store } = this.props;
        let { id } = this.props;
        id = Number(id);
        const company = store.companies.find((v,i) => v.id === id);
        return (
            <div className='item'>
                {company.name}
            </div>
        );
    }
}