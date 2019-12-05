import React, {forwardRef} from 'react';
import {AppBar, MenuItemLink, UserMenu, useTranslate} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});

const ConfigurationMenu = forwardRef((props, ref) => {
    const translate = useTranslate();
    return (
        <MenuItemLink
            ref={ref}
            to="/configuration"
            primaryText={translate('pos.configuration')}
            leftIcon={<SettingsIcon/>}
            onClick={props.onClick}
        />
    );
});

const CustomUserMenu = props => (
    <UserMenu {...props}>
        <ConfigurationMenu/>
    </UserMenu>
);

const CustomAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props} userMenu={<CustomUserMenu/>}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <p>Cloud-Radio Access Network(C-RAN)下的移动边缘计算仿真运行及性能计算平台</p>
            <span className={classes.spacer}/>
        </AppBar>
    );
};

export default CustomAppBar;
