import React from "react";
import {CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import performance from "../data/performance";
import PieChart from "recharts/lib/chart/PieChart";
import Pie from "recharts/lib/polar/Pie";
import BarChart from "recharts/lib/chart/BarChart";
import Bar from "recharts/lib/cartesian/Bar";
import Cell from "recharts/lib/component/Cell";
import {CardHeader} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

const styles = {
    flexColumn: {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'},
    singleCol: {flex: 1, marginRight: '0.5em', marginLeft: '0.5em'},
    title: {
        textAlign: 'center',
    }
};

function Performance({tti, run_state}) {
    const randomfive = (len) => (
        Array(len).fill(true).map((e, idx) => ({
            tti: idx + 1,
            five: Math.random() * 2,
        }))
    );
    console.log(randomfive(5, 'five'));

    function renderLineChart(key, ylabel) {
        return (<LineChart height={300} width={550} data={randomfive(10)}
                           margin={{top: 5, right: 10, bottom: 5, left: 0}}>
            <Line type="monotone" dataKey={key} stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="tti">
                <Label value="TTI时刻" offset={0} position='insideBottom'/>
            </XAxis>
            <YAxis>
                <Label value={ylabel} angle={-90} position='insideLeft'/>
            </YAxis>
            <Tooltip/>
        </LineChart>)
    }

    function renderBarChart(barkey, ylabel, xkey) {
        return (<BarChart height={300} width={600} data={performance.line}
                          margin={{top: 5, right: 20, bottom: 5, left: 0}}>
            <Bar type="monotone" dataKey="five" stroke="#8884d8"/>
            <XAxis dataKey="tti">
                <Label value="TTI"/>
            </XAxis>
            <YAxis/>
            <Tooltip/>
        </BarChart>)
    }

    const data01 = [
        {
            name: 'Group A', value: 40
        },
        {
            name: 'Group B', value: 40
        },
        {
            name: 'Group C', value: 30
        }
    ];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
                                       cx, cy, minAngle, innerRadius, outerRadius, percent, index,
                                   }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-minAngle * RADIAN);
        const y = cy + radius * Math.sin(-minAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {'${(percent*100).toFixed(0)}%'}
            </text>
        )
    };
    const COLORS = [
        '#0088FE',
        "#fff000",
        "#888aaa"
    ];
    const renderPieChart = (
        <PieChart height={300} width={600}>
            <Pie dataKey="value" cx={200} cy={200} isAnimationActive={true}
                 outerRadius={80}
                 fill="green"
                 label={renderCustomizedLabel}
                 data={data01} labelLine={true}>
                {
                    data01.map((entry, index) => <Cell key={'cell-${index}'} fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
            <Tooltip/>
            <Legend verticalAlign="top" height={36}/>
        </PieChart>
    );

    return (
        <div style={styles.flexColumn}>
            <div style={styles.singleCol}>
                <p style={styles.title}>最差5%吞吐量</p>
                {renderLineChart("five", "吞吐量", "最差5%吞吐量")}
            </div>
            <div style={styles.singleCol}>
                <p style={styles.title}>系统的归一化频谱效率</p>
                {renderLineChart("pingpuxiaolv", "频谱效率", "系统的归一化频谱效率")}

            </div>
            <div style={styles.singleCol}>
                <p style={styles.title}>系统能耗</p>
                {renderLineChart("systemcost", "能耗", "系统能耗")}

            </div>
            <div style={styles.singleCol}>
                <p style={styles.title}>MEC云端服务器成本</p>
                {renderLineChart("mec", "单位TTI成本", "MEC云端服务器成本")}
            </div>
            {/*<div style={styles.singleCol}>*/}
            {/*    {renderPieChart}*/}
            {/*</div>*/}
            <div style={styles.singleCol}>
                <p style={styles.title}>单个RRU吞吐量</p>
                {renderBarChart()}
            </div>
            <div style={styles.singleCol}>
                <p style={styles.title}>单个BBU频谱效率</p>
                {renderBarChart()}
            </div>
            <div style={styles.singleCol}>
                <p style={styles.title}>单个BBU能耗</p>
                {renderBarChart()}
            </div>
            <div style={styles.singleCol}>
                <Card>
                    <CardHeader>仿真结果概述</CardHeader>
                    <CardContent/>
                </Card>
            </div>
        </div>
    );
}

export default Performance