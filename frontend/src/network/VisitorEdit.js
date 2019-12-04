import React from 'react';
import {
    Datagrid,
    Edit,
    EditButton,
    FormTab,
    NumberField,
    ReferenceManyField,
    TabbedForm,
    TextField,
} from 'react-admin';
import {makeStyles} from '@material-ui/core/styles';
import FullNameField from './FullNameField';
import {styles} from './VisitorCreate';
import ColoredNumberField from "./ColoredNumberField";

const useStyles = makeStyles(styles);

const VisitorTitle = ({record}) =>
    record ? <FullNameField record={record} size={32}/> : null;

const VisitorEdit = props => {
    const classes = useStyles();
    return (
        <Edit title={<VisitorTitle/>} {...props}>
            <TabbedForm>
                <FormTab label="BBU列表" path="bbus">
                    <ReferenceManyField
                        addLabel={false}
                        sort={{field: 'id', order: 'DESC'}}
                        reference="bbus"
                        target="network_id"
                        fullWidth
                    >
                        <Datagrid>
                            <NumberField source="network_id"
                                         label="网络实例编号"/>
                            <NumberField source="id"
                                         label="BBU编号"/>
                            <NumberField source="vBbuPoolId"
                                         label="所属Bbu基带池"/>
                            <NumberField source="vlat"
                                         label="经度"/>
                            <NumberField source="vlng" label="纬度"/>
                            <NumberField source="vZ" label="高度"/>
                            <NumberField source="vTransPower" label="传输功率(dBm)"/>
                            <NumberField source="vRes" label="剩余资源量"/>
                            <NumberField source="vSchedualRruMode" label="调度模式"/>
                            <NumberField source="vLinkId" label="接入环"/>
                            <EditButton/>
                        </Datagrid>
                    </ReferenceManyField>
                </FormTab>
                <FormTab
                    label="BbuPool基带池列表"
                    path="bbupools"
                >
                    <ReferenceManyField
                        addLabel={false}
                        sort={{field: 'date', order: 'DESC'}}
                        reference="bbupools"
                        target="network_id"
                        fullWidth
                    >
                        <Datagrid>
                            <ColoredNumberField
                                source="network_id"
                                label="网络实例编号"
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
                            <EditButton style={{padding: 0}}/>
                        </Datagrid>
                    </ReferenceManyField>
                </FormTab>
            </TabbedForm>
        </Edit>
    );
};

export default VisitorEdit;
