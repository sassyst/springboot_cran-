import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useShowController, ReferenceField, TextField } from 'react-admin';

const ConfigShow = props => {
    const { record } = useShowController(props);
    if (!record) return null;
    return (
        <Card style={{ width: 600, margin: 'auto' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            场景配置信息
                        </Typography>
                    </Grid>
                </Grid>
                <div style={{ height: 20 }}>&nbsp;</div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom align="center">
                            Date{' '}
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h6" gutterBottom align="center">
                            Order
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ConfigShow;
