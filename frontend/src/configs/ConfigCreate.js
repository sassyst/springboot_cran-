import React from 'react';
import {BooleanInput, Create, FileField, FileInput, NumberInput, SelectInput, SimpleForm} from 'react-admin';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid";

const ConfigCreate = props => {
    return (
        <Create {...props}>
            <SimpleForm>
                <Table fullWidth>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <SelectInput
                                    label="用户移动模型"
                                    source="moveModel.moveKind"
                                    choices={[
                                        {name: '全随机模型', id: 0},
                                        {name: '部分随机模型', id: 1},
                                    ]}
                                />
                            </TableCell>
                            <TableCell>
                                <SelectInput
                                    label="速度分布类型"
                                    source="moveModel.type"
                                    choices={[
                                        {name: '正太分布', id: 0},
                                        {name: '均匀分布', id: 1},
                                    ]}
                                />
                            </TableCell>
                            <TableCell>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <NumberInput label="速度范围最小值" source="moveModel.speedMin"/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <NumberInput label="速度范围最大值" source="moveModel.speedMan"/>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <NumberInput label="经度活动区间最小值" source="moveModel.speedMin"/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <NumberInput label="经度活动区间最大值" source="moveModel.speedMan"/>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <NumberInput label="纬度活动区间最小值" source="moveModel.speedMin"/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <NumberInput label="纬度活动区间最大值" source="moveModel.speedMan"/>
                                    </Grid>
                                </Grid>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <BooleanInput label=" 用户状态是否活跃" source="isActivity"/>
                            </TableCell>
                            <TableCell>
                                <BooleanInput label="支持MEC" source="supportMec"/>
                            </TableCell>
                            <TableCell>
                                <SelectInput
                                    label="无线链路模型"
                                    source="WirelessLinkModel.type"
                                    choices={[
                                        {name: '自由空间模型', id: 0},
                                        {name: '自由+衰落', id: 1},
                                        {name: 'Hata231', id: 2},
                                        {name: 'Hata231修正', id: 3},
                                    ]}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <SelectInput
                                    label="资源调度模型"
                                    source="WirelessLinkModel.type"
                                    choices={[
                                        {name: '轮询', id: 0},
                                        {name: '最大载干比', id: 1},
                                        {name: '比例公平', id: 2},
                                    ]}
                                /> </TableCell>
                            <TableCell>
                                <SelectInput
                                    label="业务量模型"
                                    source="WirelessLinkModel.type"
                                    choices={[
                                        {name: '非既定业务量', id: 0},
                                        {name: '既定业务量', id: 1},

                                    ]}
                                />
                            </TableCell>
                            <TableCell>
                                <FileInput source="ueTrafficModel.excel_file" label="业务量excel文件导入"
                                           accept="application/excel">
                                    <FileField source="src" title="title"/>
                                </FileInput>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </SimpleForm>
        </Create>
    )
};
export default ConfigCreate;
