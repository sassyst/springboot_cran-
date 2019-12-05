import React from 'react';
import {Datagrid, List, TextField} from 'react-admin';
import ColoredNumberField from "../network/ColoredNumberField";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    nb_commands: {color: 'purple'},
});
const RruList = props => {
    const classes = useStyles();
    return (
        <List
            {...props}
            sort={{field: 'id', order: 'DESC'}}
            perPage={25}
        >
            <Datagrid optimized rowClick="edit">
                <ColoredNumberField
                    source="network_id"
                    label="resources.network.fields.network_id"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="id"
                    label="resources.network.fields.network_id"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="lat"
                    label="resources.network.fields.network_id"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="lng"
                    label="resources.network.fields.UeNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vZ"
                    label="resources.network.fields.UeNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vAllRes"
                    label="resources.network.fields.RruNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vRestLeft"
                    label="resources.network.fields.RruNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vDynamicEnengy"
                    label="resources.network.fields.BbuPoolNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vStaticEnengy"
                    label="resources.network.fields.BbuNum"
                    className={classes.nb_commands}
                />
                <TextField
                    source="bbuPoolInfo"
                    label="resources.network.fields.MecServerNum"
                    className={classes.nb_commands}
                />
            </Datagrid>
        </List>
    );
};

export default RruList;
