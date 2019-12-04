import React from 'react';
import {Datagrid, List} from 'react-admin';
import ColoredNumberField from "../network/ColoredNumberField";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    nb_commands: {color: 'purple'},
});
const OrderList = props => {
    const classes = useStyles();
    return (
        <List
            {...props}
            sort={{field: 'vBbuId', order: 'DESC'}}
            perPage={25}
        >
            <Datagrid optimized rowClick="edit">
                <ColoredNumberField
                    source="network_id"
                    label="resources.network.fields.network_id"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vBbuId"
                    label="resources.network.fields.network_id"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vBbuPoolId"
                    label="resources.network.fields.network_id"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vlat"
                    label="resources.network.fields.UeNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vlng"
                    label="resources.network.fields.RruNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vZ"
                    label="resources.network.fields.BbuPoolNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vRruNum"
                    label="resources.network.fields.BbuNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vSchedualRruMode"
                    label="resources.network.fields.MecServerNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vTransPower"
                    label="resources.network.fields.MecServerNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vEquipPower"
                    label="resources.network.fields.MecServerNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vIsActivity"
                    label="resources.network.fields.MecServerNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vRes"
                    label="resources.network.fields.MecServerNum"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="vLinkId"
                    label="resources.network.fields.MecServerNum"
                    className={classes.nb_commands}
                />
                {/*<NullableBooleanInput*/}
                {/*    source="vSupportMec"*/}
                {/*    label="resources.network.fields.MecServerNum"*/}
                {/*    className={classes.nb_commands}*/}
                {/*/>*/}
            </Datagrid>
        </List>
    );
};

export default OrderList;
