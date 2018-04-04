import React from 'react';

export default function CompanyView(props) {

    const {model} = props;

    return (
        <div>
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
        </div>
    );
}