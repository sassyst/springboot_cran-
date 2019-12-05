import React from 'react';
import {Datagrid, DateField, DateInput, Filter, List, NumberField, SearchInput} from 'react-admin';
import {makeStyles} from "@material-ui/core";
import CustomerLinkField from "../network/CustomerLinkField";

const useStyles = makeStyles({
    nb_commands: {color: 'purple'},
});
const NetworkFilter = props => (
    <Filter {...props}>

        <SearchInput source="id" alwaysOn/>
        <DateInput source="create_date"/>
    </Filter>
);
const MecList = props => {
    const classes = useStyles();
    return (
        <List
            {...props}
            filters={<NetworkFilter/>}
            sort={{field: 'create_date', order: 'DESC'}}
            perPage={10}
        >

            <Datagrid optimized rowClick="edit">
                {/*<CustomerLinkField*/}
                {/*    label="resources.network.fields.create_by"*/}
                {/*/>*/}
                <NumberField
                    source="id"
                    label="编号"
                />
                <NumberField
                    source="vms"
                    label="虚拟机数"
                />
                <NumberField
                    source="bandwidth"
                    label="带宽"
                />
                <NumberField
                    source="memo"
                    label="可用内存"
                />
                <NumberField
                    source="cost"
                    label="成本"
                />
                <DateField source="create_date" type="date" showTime/>
                <DateField source="last_edit" type="date" showTime/>
            </Datagrid>
        </List>
    );
};

export default MecList;
