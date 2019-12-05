import React from 'react';
import {Create, NumberInput, SimpleForm} from 'react-admin';

const MecCreate = props => {
    return (
        <Create {...props}>
            <SimpleForm>
                <NumberInput label="虚拟机数" source="vms"/>
                <NumberInput label="带宽" source="bandwidth"/>
                <NumberInput label="内存" source="memo"/>
                <NumberInput label="成本" source="cost"/>
            </SimpleForm>
        </Create>
    )
};
export default MecCreate;
