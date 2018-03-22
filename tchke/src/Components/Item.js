import React from 'react';

export default class Item extends React.Component {
    render() {
        const { value } = this.props;
        return (
            <div className='item'>
                {value.name}
            </div>
        );
    }
}