import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import {useTranslate} from 'react-admin';
import { Link } from 'react-router-dom';
import CardIcon from './CardIcon';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
    main: {
        flex: '1',
        marginLeft: '1em',
        marginTop: 20,
    },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'right',
    },
    title: {
        padding: '0 16px',
    },
    value: {
        padding: '0 16px',
        minHeight: 48,
    },
});

const Networks = ({ network = []}) => {
    const classes = useStyles();
    const translate = useTranslate();
    return (
        <div className={classes.main}>
            <CardIcon Icon={CustomerIcon} bgColor="#4caf50" />
            <Card className={classes.card}>
                <Typography className={classes.title} color="textSecondary">
                    {translate('pos.dashboard.new_customers')}
                </Typography>
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.value}
                >
                    {3}
                </Typography>
                <Divider />
                <List>
                    {network
                        ? network.map(record => (
                            <ListItem
                                button
                                to={`/networks/${record.network_id}`}
                                component={Link}
                                key={record.network_id}
                            >
                                <ListItemText
                                    primary={`${record.network_id} ${
                                        record.des
                                    }`}
                                />
                            </ListItem>
                        ))
                        : null}
                </List>
            </Card>
        </div>
    );
};

export default Networks;
