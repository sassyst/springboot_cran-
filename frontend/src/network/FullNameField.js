import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import pure from 'recompose/pure';

import AvatarField from './AvatarField';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    avatar: {
        marginRight: theme.spacing(1),
    },
}));

const FullNameField = ({ record = {}, size }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AvatarField
                className={classes.avatar}
                record={record}
                size={size}
            />
            {record.create_by.userName}
        </div>
    );
};

const PureFullNameField = pure(FullNameField);

PureFullNameField.defaultProps = {
    source: 'create_by.userName',
    label: 'resources.network.fields.create_by',
};

export default PureFullNameField;
