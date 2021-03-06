import React from 'react';
import { Redirect } from 'react-router-dom';
import CompanyCard from './CompanyCard';

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { redirectTo } = this.state;
        if (redirectTo) {
            return <Redirect to={redirectTo} />
        }

        const { model } = this.props;

        return (
            <div className='item'>
                <CompanyCard model={model}/>
                <button type='button' onClick={this.handleEdit}>Edit</button>
            </div>
        );
    }

    handleEdit = () => {
        const { model } = this.props;
        this.setState({
            redirectTo: `/company/edit/${model.id}`
        });
    }
}