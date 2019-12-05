import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Create, Datagrid, FormTab, ReferenceManyField, TabbedForm, TextField} from 'react-admin';
import ColoredNumberField from "./ColoredNumberField";
import {Checkbox, TableBody} from "@material-ui/core";

import data from '../data/availablenet'
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";

export const styles = {
    first_name: {display: 'inline-block'},
    last_name: {display: 'inline-block', marginLeft: 32},
    email: {width: 544},
    address: {maxWidth: 544},
    zipcode: {display: 'inline-block'},
    city: {display: 'inline-block', marginLeft: 32},
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    flexColumn: {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'},
    singleCol: {flex: 1, marginRight: '0.5em', marginLeft: '0.5em'},
    title: {
        textAlign: 'center',
    },
    table: {
        minWidth: 650,
    },
};

const bbus = data.bbus;
const useStyles = makeStyles(styles);
const VisitorCreate = props => {
    const classes = useStyles();
    return (
        <Create {...props}>
            <TabbedForm>
                <FormTab label="BBU基带处理单元列表" path="bbus">
                    <Table className={classes.table} size="small" aria-label="a dense table" fullWidth>
                        <TableHead>
                            <TableRow>
                                <TableCell>BBU编号</TableCell>
                                <TableCell align="right">所属Bbu基带池</TableCell>
                                <TableCell align="right">经度(g)</TableCell>
                                <TableCell align="right">纬度(g)</TableCell>
                                <TableCell align="right">高度(g)</TableCell>
                                <TableCell align="right">传输功率(dBm)</TableCell>
                                <TableCell align="right">剩余资源量</TableCell>
                                <TableCell align="right">RRU调度模式</TableCell>
                                <TableCell align="right">接入环</TableCell>
                                <TableCell align="center">选择加入实例中</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bbus.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell align="right">{row.vBbuPoolId}</TableCell>
                                    <TableCell align="right">{row.vlat}</TableCell>
                                    <TableCell align="right">{row.vlng}</TableCell>
                                    <TableCell align="right">{row.vZ}</TableCell>
                                    <TableCell align="right">{row.vTransPower}</TableCell>
                                    <TableCell align="right">{row.vRes}</TableCell>
                                    <TableCell align="right">{row.vSchedualRruMode}</TableCell>
                                    <TableCell align="right">{row.vLinkId}</TableCell>
                                    <Checkbox align="center"/>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

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
                        <Datagrid optimized rowClick="edit">
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
                            <Checkbox label="加入"/>
                        </Datagrid>
                    </ReferenceManyField>
                </FormTab>
                <FormTab
                    label="RRU射频拉远模块列表"
                    path="rrus"
                >
                    <ReferenceManyField
                        addLabel={false}
                        sort={{field: 'date', order: 'DESC'}}
                        reference="rrus"
                        target="network_id"
                        fullWidth
                    >
                        <Datagrid optimized rowClick="edit">
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
                            <Checkbox label="选择"/>
                        </Datagrid>
                    </ReferenceManyField>
                </FormTab>
                <FormTab
                    label="Ue用户设备列表"
                    path="rrus"
                >
                    <ReferenceManyField
                        addLabel={false}
                        sort={{field: 'date', order: 'DESC'}}
                        reference="rrus"
                        target="network_id"
                        fullWidth
                    >
                        <Datagrid optimized rowClick="edit">
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
                            <Checkbox label="加入到网络实例"/>
                        </Datagrid>
                    </ReferenceManyField>
                </FormTab>
                <FormTab
                    label="Antenna天线列表"
                    path="rrus"
                >
                    <ReferenceManyField
                        addLabel={false}
                        sort={{field: 'date', order: 'DESC'}}
                        reference="rrus"
                        target="network_id"
                    >
                        <Datagrid optimized rowClick="edit">
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
                            <Checkbox label="加入到网络实例"/>
                        </Datagrid>
                    </ReferenceManyField>
                </FormTab>
                <FormTab
                    label="Link链路列表"
                    path="rrus"
                >
                    <ReferenceManyField
                        addLabel={false}
                        sort={{field: 'date', order: 'DESC'}}
                        reference="rrus"
                        target="network_id"
                        fullWidth
                    >
                        <Datagrid optimized rowClick="edit">
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
                            <Checkbox label="加入到网络实例"/>

                        </Datagrid>
                    </ReferenceManyField>
                </FormTab>
                <FormTab
                    label="Mec服务器列表"
                    path="rrus"
                >
                    <ReferenceManyField
                        addLabel={false}
                        sort={{field: 'date', order: 'DESC'}}
                        reference="rrus"
                        target="network_id"
                        fullWidth
                    >
                        <Datagrid optimized rowClick="edit">
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
                            <Checkbox label="加入到网络实例"/>
                        </Datagrid>
                    </ReferenceManyField>
                </FormTab>
            </TabbedForm>
        </Create>
    );
};

export default VisitorCreate;
