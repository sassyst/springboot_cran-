import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useShowController} from 'react-admin';
import Button from "@material-ui/core/Button";

const ConfigShow = props => {
    const {record} = useShowController(props);
    if (!record) return null;
    return (
        <Card style={{width: 600, margin: 'auto'}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            场景配置信息
                        </Typography>
                    </Grid>
                </Grid>
                <div style={{height: 20}}>&nbsp;</div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        用户移动模型
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>{record.moveModel.kindDisplay}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {record.moveModel.moveKind === 0 ? <Typography>
                            速度分布类型:均匀分布<br/>
                            速度范围:{record.moveModel.speedMin}-{record.moveModel.speedMax}
                        </Typography> : <Typography>
                            速度分布类型:正太分布<br/>
                            速度均值:{record.moveModel.speedAve}
                            <br/>
                            速度方差:{record.moveModel.speedVar}
                        </Typography>}
                        <Typography>
                            经度移动区间 {record.moveModel.latMin}-{record.moveModel.latMax}
                            <br/>
                            纬度移动区间 {record.moveModel.lngMin}-{record.moveModel.lngMax}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        业务量模型
                    </Grid>
                    <Grid item xs={3}>
                        <Typography>{record.ueTrafficModel.typeDisplay}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {record.ueTrafficModel.modelType === 0 ? <Typography>
                            VoIP用户占比:{record.ueTrafficModel.VoIPRatio}<br/>
                            非VoIP最低速率:{record.ueTrafficModel.NoVoIPVelocity}
                        </Typography> : <Typography>
                            <Button variant="outlined" color="primary" href="#outlined-buttons">
                                Excel文件下载
                            </Button>
                        </Typography>}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ConfigShow;
