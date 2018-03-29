import React from 'react';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

@observer
export default class ItemEditor extends React.Component {
    render() {
        const { model } = this.props;

        if (!model.id) {
            return <Redirect to='/'/>
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>Name</div>
                    <div>
                        <input type='text' value={model.name} onChange={this.handleNameChange} />
                    </div>
                </div>
                <div>
                    <div>OGRN</div>
                    <div>
                        <input type='text' value={model.ogrn} onChange={this.handleOgrnChange} />
                    </div>
                </div>
                <div>
                    <div>Type</div>
                    <div>
                        <select onChange={this.handleTypeChange} value={model.type}>
                            <option key='ooo' value='ooo'>ooo</option>
                            <option key='ip' value='ip'>ip</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>Registration Date</div>
                    <div>
                        <DatePicker selected={model.momentDate} onChange={this.handleDateChange}/>
                    </div>
                </div>
                <div>
                    <div>Active</div>
                    <div>
                        <input type='checkbox' value={model.active} onChange={this.handleActiveChange} />
                    </div>
                </div>
                <button type='submit'>Save</button>
            </form>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onDone();
    };

    handleNameChange = (e) => {
        this.props.model.name = e.target.value;
    };

    handleOgrnChange = (e) => {
        this.props.model.ogrn = e.target.value;
    };

    handleTypeChange = (e) => {
        this.props.model.type = e.target.value;
    };

    handleDateChange = (date) => {
        this.props.model.date = date.format();
    };

    handleActiveChange = (e) => {
        this.props.model.active = e.target.value;
    };
}