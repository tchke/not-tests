import React from 'react';
import { Redirect } from 'react-router';

export default class NewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const { store } = this.props; 
        const { newCompanyName, doRedirect } = this.state;       
        if (doRedirect) {
            return <Redirect to='/'/>;
        }

        return (
            <div className='item'>
                <input
                    type="text"
                    value={newCompanyName}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }

    handleInputChange = (e) => {
        this.setState({
            newCompanyName: e.target.value
        });
    }

    handleClick = () => {
        const { store } = this.props;
        const { newCompanyName } = this.state;

        store.addCompany(newCompanyName);
        this.setState({ doRedirect: true });
    }
}