import React, {useState} from 'react';
import TuoPuMap from "../map/Map.js"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Performance from "./Performance";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {useTranslate} from "ra-core";
import useInterval from "./useInterval";
import Typography from "@material-ui/core/Typography";
import ControlParams from "./runConfigPanel";
import CardIcon from "./CardIcon";
import ShoppingCartIcon from "@material-ui/core/SvgIcon/SvgIcon";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

const styles = {
    flex: {display: 'flex'},
    flexColumn: {display: 'flex', flexDirection: 'column'},
    leftCol: {flex: 6, marginRight: '0.5em'},
    rightCol: {flex: 1, marginLeft: '0.5em'},
    singleCol: {marginTop: '2em', marginBottom: '2em'},
    media: {
        height: '50em',
    },
    main: {
        flex: '1',
        marginLeft: '1em',
        marginTop: 20,
    },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'center',
    },
    title: {
        padding: '0 16px',
    },
    value: {
        padding: '0 16px',
        minHeight: 48,
    },
};


const Dashboard = () => {
    const [showmap, setShow] = useState(true);

    //run_state,运行状态
    //-1:无配置无法开始
    // 0:已配置等待开始
    // 1:正在运行
    // 2:暂停
    // 3:仿真结束
    //tti: -1代表未开始
    const [run_state, setRunState] = useState(-1);
    const [state, setState] = useState({tti: 0, total_tti: 20});
    const [delay, setDelay] = useState(1000);
    const [network_id, setNetwork] = useState(-1);
    console.log('Dashboard tti:' + state.tti);
    console.log('delay:' + state.delay);

    useInterval(() => {
        // 你自己的代码
        console.log("callback");
        console.log(state.tti);
        console.log(state.total_tti);
        if (state.tti === state.total_tti) {
            setRunState(3);
            setState(state => ({...state, tti: 0}));

        }
        setState(state => ({...state, tti: state.tti === state.total_tti ? state.tti : state.tti + 1}));

    }, run_state === 1 ? delay : null);

    const translate = useTranslate();

    function renderSwitch(local_state) {
        switch (local_state) {
            case -1:
                return (<List><ListItem><p>还未配置,请选择或导入网络实例</p></ListItem></List>);
            case 0:
                return (
                    <List>
                        <Button color="primary" variant="contained" onClick={() => setRunState(1)}>
                            {translate('pos.dashboard.map.start_button')}
                        </Button>
                    </List>
                );
            case 1:
                return (
                    <List>
                        <Button color="primary" variant="contained" onClick={() => setRunState(2)}>
                            {translate('pos.dashboard.map.pause_button')}
                        </Button>
                        <Button color="primary" variant="contained" onClick={() => setRunState(2)}>
                            {translate('pos.dashboard.map.end_button')}
                        </Button>
                    </List>);
            case 2:
                return (
                    <List>
                        <Button color="primary" variant="contained" onClick={() => setRunState(1)}>
                            {translate('pos.dashboard.map.continue_button')}
                        </Button>}
                        <Button color="primary" variant="contained" onClick={() => setRunState(3)}>
                            {translate('pos.dashboard.map.end_button')}
                        </Button>
                    </List>);
            default:
                return (
                    <List>
                        <Button color="primary" variant="contained" onClick={() => setRunState(1)}>
                            {translate('pos.dashboard.map.start_button')}
                        </Button>
                    </List>);
        }
    }

    const handleChange = event => {
        if (event.target.value !== -1) {
            setRunState(0);
            setState(state => ({...state, tti: 0}));
        }
        setNetwork(event.target.value || -1);

    };

    return (
        <div style={styles.flex}>
            <div style={styles.leftCol}>
                <div style={styles.singleCol}>
                    <Card>
                        {showmap ? <CardContent style={styles.media}>
                            <TuoPuMap tti={state.tti} run_state={run_state}/>
                        </CardContent> : <CardContent><Performance tti={state.tti}/></CardContent>}
                    </Card>
                </div>
            </div>
            <div style={styles.rightCol}>
                <div style={styles.singleCol}>
                    <div style={styles.main}>
                        <CardIcon Icon={ShoppingCartIcon} bgColor="#ff9800"/>
                        <Card style={styles.card}>
                            <Typography style={styles.title} color="textSecondary">
                                仿真控制面板
                            </Typography>
                            <ControlParams/>
                            <List>
                                <InputLabel htmlFor="demo-dialog-native">选择网络实例</InputLabel>
                                <Select
                                    native
                                    onChange={handleChange}
                                    input={<Input id="network"/>}
                                >
                                    <option value={1}>1</option>
                                    <option value={6}>6</option>
                                    {/*<option value={7}>7</option>*/}
                                </Select>
                            </List>
                            <List>
                                <InputLabel htmlFor="demo-dialog-native">选择场景参数配置</InputLabel>
                                <Select
                                    native
                                    // onChange={handleChange}
                                    input={<Input id="params_id"/>}
                                >
                                    <option value={1}>1</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                </Select>
                            </List>
                            <p>
                                当前TTI:{state.tti}
                            </p>
                            {renderSwitch(run_state)}
                            <Button color="primary" variant="outlined" onClick={() => setShow(!showmap)}>
                                {!showmap ? '展示地图' : '展示性能图表'}
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
