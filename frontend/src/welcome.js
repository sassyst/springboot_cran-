import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles';
import {useTranslate} from 'react-admin';
import welcome from './5_examples_of_edge_computing.png'
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent"; // relative path to image

const useStyles = makeStyles({
    image: {
        width: '1200px',
        height: '549px'
    },
    // media: {
    //     height: '689px',
    // },
});


const Welcome = () => {
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <Card>
            <CardMedia image={welcome} className={classes.image}/>
            <CardContent>
                <Typography component="p">
                    移动边缘计算任务卸载优化策略支持，高德地图模拟基站真实部署，网络性能计算图形展示
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Welcome;
