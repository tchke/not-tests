import React from 'react';
import { Redirect } from 'react-router-dom';

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
        console.log(model);
        return (
            <div className='item'>
                <div>
                    <div>Name</div>
                    <div>
                        {model.name}
                    </div>
                </div>
                <div>
                    <div>OGRN</div>
                    <div>
                        {model.ogrn}
                    </div>
                </div>
                <div>
                    <div>Type</div>
                    <div>
                        {model.type}
                    </div>
                </div>
                <div>
                    <div>Registration Date</div>
                    <div>
                        {model.date}
                    </div>
                </div>
                <div>
                    <div>Active</div>
                    <div>
                        {model.active}
                    </div>
                </div>
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