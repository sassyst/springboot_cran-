import React from 'react';
import {Datagrid, DateField, DateInput, Filter, List, SearchInput, TextField,} from 'react-admin';
import {makeStyles} from '@material-ui/core';
import ColoredNumberField from './ColoredNumberField';
import CustomerLinkField from "./CustomerLinkField";

const NetworkFilter = props => (
    <Filter {...props}>
        <SearchInput source="id" alwaysOn/>
        <DateInput source="create_date"/>
    </Filter>
);

const useStyles = makeStyles({
    nb_commands: {color: 'purple'},
});

const VisitorList = props => {
    const classes = useStyles();
    return (
        <List
            {...props}
            filters={<NetworkFilter/>}
            sort={{field: 'create_date', order: 'DESC'}}
            perPage={10}
        >
            <Datagrid optimized rowClick="edit">
                <CustomerLinkField
                    label="resources.network.fields.create_by"
                />
                <ColoredNumberField
                    source="id"
                    label="resources.network.fields.network_id"
                    className={classes.nb_commands}
                />
                <DateField source="create_date" type="date" showTime/>
                <DateField source="last_edit" type="date" showTime/>
                <ColoredNumberField
                    source="ueNum"
                    label="resources.network.fields.UeNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="rruNum"
                    label="resources.network.fields.RruNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="bbuPoolNum"
                    label="resources.network.fields.BbuPoolNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="bbuNum"
                    label="resources.network.fields.BbuNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="mecServerNum"
                    label="resources.network.fields.MecServerNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="linkNum"
                    label="链路数"
                    className={classes.nb_commands}
                />
                <TextField
                    // source="des"
                    label="resources.network.fields.des"
                    className={classes.nb_commands}
                />

            </Datagrid>
        </List>
    );
};

export default VisitorList;
