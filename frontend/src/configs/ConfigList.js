import React from 'react';
import {
    BooleanField,
    Datagrid,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    SearchInput,
    TextField,
    DeleteButton
} from 'react-admin';
import {makeStyles} from "@material-ui/core";
import ConfigShow from "./configShow";

const ConfigFilter = props => (
    <Filter {...props}>
        <SearchInput source="create_by.userName" alwaysOn/>
        <NullableBooleanInput source="supportMec"/>
    </Filter>
);

const useStyles = makeStyles({
    nb_commands: {color: 'purple'},
});
const ConfigList = props => {
    const classes = useStyles();
    return (
        <List
            {...props}
            sort={{field: 'id', order: 'DESC'}}
            filters={<ConfigFilter />}
            perPage={5}
        >
            <Datagrid rowClick="expand" expand={<ConfigShow/>}>
                <NumberField
                    source="id"
                    label="编号"
                />

                <TextField
                    source="moveModel.kindDisplay"
                    label="用户移动模型"
                />
                <BooleanField
                    source="isActivity"
                    label="用户活跃"
                />
                <TextField
                    source="WirelessLinkModel.typeDisplay"
                    label="无线链路模型"
                />
                <TextField
                    source="resSchedualModel.typeDisplay"
                    label="资源调度模型"
                />
                <TextField
                    source="ueTrafficModel.typeDisplay"
                    label="业务量模型"
                />
                <BooleanField
                    source="supportMec"
                    label="MEC支持"
                />
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};

export default ConfigList;
