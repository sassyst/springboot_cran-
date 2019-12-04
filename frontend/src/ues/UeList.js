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
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="lat"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="lng"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="hight"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="ueType"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="ueTransPower"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="snr"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="dis"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="ueAntennaId"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="serviceRruId"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="ueGroupId"
                    className={classes.nb_commands}
                />
                <ColoredNumberField
                    source="totalRb"
                    className={classes.nb_commands}
                />
            </Datagrid>
        </List>
    );
};

export default OrderList;
