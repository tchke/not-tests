import React from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@observer
export default class ItemEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const { companyToEdit } = this.props.store;

        if (!companyToEdit) {
            return <Redirect to='/'/>
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>Name</div>
                    <div>
                        <input type='text' value={companyToEdit.name} onChange={this.handleNameChange} />
                    </div>
                </div>
                <button type='submit'>Save</button>
            </form>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onDone();
    }

    handleNameChange = (e) => {
        const { companyToEdit } = this.props.store;
        companyToEdit.name = e.target.value;
    }
}