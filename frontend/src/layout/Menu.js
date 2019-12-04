import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import {useMediaQuery} from '@material-ui/core';
import {DashboardMenuItem, MenuItemLink, useTranslate} from 'react-admin';

import visitors from '../network';
import SubMenu from './SubMenu';

const Menu = ({onMenuClick, dense, logout}) => {
    const [state, setState] = useState({
        menuNetwork: false,
        menuParams: false,
        menucurrNetwork: false,
        menucurrLink: false,
    });
    const translate = useTranslate();
    const isXsmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    useSelector(state => state.theme); // force rerender on theme change

    const handleToggle = menu => {
        setState(state => ({...state, [menu]: !state[menu]}));
    };

    return (
        <div>
            {' '}
            <DashboardMenuItem primaryText={translate(`pos.menu.dashboard`, {
                smart_count: 2,
            })} onClick={onMenuClick} sidebarIsOpen={open}/>
            {/*网络实例管理*/}
            <MenuItemLink
                to={`/networks`}
                primaryText={translate(`resources.network.name`, {
                    smart_count: 2,
                })}
                leftIcon={<visitors.icon/>}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            {/*网络设备管理*/}
            <SubMenu
                handleToggle={() => handleToggle('menuNetwork')}
                isOpen={state.menuNetwork}
                sidebarIsOpen={open}
                name="pos.menu.network"
                icon={<visitors.icon/>}
                dense={dense}
            >
                <MenuItemLink
                    to={`/bbus`}
                    primaryText={translate(`resources.bbus.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/bbupools`}
                    primaryText={translate(`resources.bbupools.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.ues.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.mecservers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.links.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            {/*场景参数管理*/}
            <MenuItemLink
                to={`/ues`}
                primaryText={translate(`pos.menu.params`, {
                    smart_count: 2,
                })}
                leftIcon={<visitors.icon/>}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            {/*当前网络部署情况*/}
            <SubMenu
                handleToggle={() => handleToggle('menucurrNetwork')}
                isOpen={state.menucurrNetwork}
                sidebarIsOpen={open}
                name="pos.menu.current_network"
                icon={<visitors.icon/>}
                dense={dense}
            >
                <MenuItemLink
                    to={`/bbus`}
                    primaryText={translate(`resources.bbus.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.bbupools.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.ues.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.mecservers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.links.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            {/*当前链路部署情况*/}
            <SubMenu
                handleToggle={() => handleToggle('menucurrLink')}
                isOpen={state.menucurrLink}
                sidebarIsOpen={open}
                name="pos.menu.current_link"
                icon={<visitors.icon/>}
                dense={dense}
            >
                <MenuItemLink
                    to={`/bbus`}
                    primaryText={translate(`resources.bbus.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.bbupools.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.ues.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.mecservers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/ues`}
                    primaryText={translate(`resources.links.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to={`/ues`}
                primaryText={translate(`pos.menu.current_params`, {
                    smart_count: 2,
                })}
                leftIcon={<visitors.icon/>}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            {isXsmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText={translate('pos.configuration')}
                    leftIcon={<SettingsIcon/>}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            )}
            {isXsmall && logout}
        </div>
    );
};

Menu.propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object,
};

export default Menu;
