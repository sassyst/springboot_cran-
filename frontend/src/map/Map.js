import React from "react";
import {Map, Markers, Polyline} from 'react-amap';
import ueImg from './mapicon/Old-Mobile-icon.png';
import bbuImg from './mapicon/server-icon.png';
import rruImg from './mapicon/satellite-Vista-icon.png'
import bbuPool from './mapicon/database.svg'
import mecServer from './mapicon/cloud-computing.png'
import allmarkers from '../data/network_demo'

const styles = {
    media: {
        height: '50em',
    }
};

function TuoPuMap({tti, run_state}) {

    const styleMec = {
        background: `url(${mecServer})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '80px',
        height: '80px',
        textAlign: 'left',
        color: 'black',
        fontSize: '20px'
    };
    const styleUe = {
        background: `url(${ueImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '30px',
        height: '30px',
        textAlign: 'left',
        color: 'black',
        fontSize: '15px'
    };
    const styleBbu = {
        background: `url(${bbuImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '40px',
        height: '50px',
        textAlign: 'left',
        color: 'black',
        fontSize: '15px',
    };
    const styleRru = {
        background: `url(${rruImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '40px',
        height: '50px',
        textAlign: 'left',
        color: 'black',
        fontSize: '15px'
    };
    const styleBbuPool = {
        background: `url(${bbuPool})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '60px',
        height: '60px',
        textAlign: 'left',
        color: 'black',
        fontSize: '20px',
    };
    const ueNum = 30;
    const BbuNum = 7;
    const RruNum = 15;
    const BbuPoolNum = 3;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const randomUePosition = () => ({
        longitude: (116395428 - Math.random() * 300000) / 1000000,
        latitude: (3990943 + Math.random() * 20000) / 100000
    });
    const randomUeMarker = (len) => (
        Array(len).fill(true).map((e, idx) => ({
            position: randomUePosition(),
            type: 'ue',
            rru_id: getRandomInt(RruNum)
        }))
    );


    const randomBBuPosition = () => ({
        longitude: (116397428 - Math.random() * 200000) / 1000000,
        latitude: (3990923 + Math.random() * 20000) / 100000
    });
    const randomBBuMarker = (len) => (
        Array(len).fill(true).map((e, idx) => ({
            position: randomBBuPosition(),
            type: 'bbu',
            mec: idx < 5,
            bbupool_id: getRandomInt(BbuPoolNum)
        }))
    );
    const randomRRuPosition = () => ({
        longitude: (116397428 - Math.random() * 200000) / 1000000,
        latitude: (3990923 + Math.random() * 20000) / 100000
    });
    const randomRRuMarker = (len) => (
        Array(len).fill(true).map((e, idx) => ({
            position: randomRRuPosition(),
            type: 'rru',
            draggable: true,
            bbu_id: getRandomInt(BbuNum)
        }))
    );
    const randomBBUPoolPosition = () => ({
        longitude: (116397428 + Math.random() * 200000) / 1000000,
        latitude: (3990923 + Math.random() * 20000) / 100000
    });
    const randomBBUPoolMarker = (len) => (
        Array(len).fill(true).map((e, idx) => ({
            position: randomBBUPoolPosition(),
            type: 'bbupool',
            draggable: true,
        }))
    );
    const randomMECPosition = () => ({
        longitude: (116397428 + Math.random() * 200000) / 1000000,
        latitude: (3990923 + Math.random() * 20000) / 100000
    });
    console.log(randomMECPosition());
    const randomMECMarker = () => (
        Array(1).fill(true).map((e, idx) => ({
            position: {
                latitude: 40.02905648864364,
                longitude: 116.57246118310128
            },
            type: 'mec',
            draggable: true,
        }))
    );

    const renderMarkerLayout = (extData) => {
        if (extData.type === 'ue') {
            return <div style={styleUe}>{extData.type}</div>
        } else if (extData.type === 'bbu') {
            if (extData.mec) {
                return <div style={styleBbu}>
                    MEC
                    {extData.type}</div>
            } else {
                return <div style={styleBbu}>{extData.type}</div>
            }
        } else if (extData.type === 'bbupool')
            return <div style={styleBbuPool}>{extData.type}</div>
        else if (extData.type === 'rru') {
            return <div style={styleRru}>{extData.type}</div>
        } else {
            return <div style={styleMec}>{extData.type}</div>
        }
    };
    const ueMarkers = randomUeMarker(ueNum);
    const rruMarkers = allmarkers[0].rruMarkers;
    const bbuMarkers = allmarkers[0].bbuMarkers;
    const bbupoolMarkers = allmarkers[0].bbupoolMarkers;
    const allMarkers = rruMarkers.concat(bbuMarkers).concat(bbupoolMarkers).concat(randomMECMarker(1));

    const paths = [];
    for (let i = 0; i < ueMarkers.length; i++) {
        paths.push([ueMarkers[i].position, rruMarkers[ueMarkers[i].rru_id].position]);
    }
    for (let i = 0; i < rruMarkers.length; i++) {
        paths.push([rruMarkers[i].position, bbuMarkers[rruMarkers[i].bbu_id].position]);
    }
    for (let i = 0; i < bbuMarkers.length; i++) {
        paths.push([bbuMarkers[i].position, bbupoolMarkers[bbuMarkers[i].bbupool_id].position]);
    }

    const strokeColor = "#fff";
    const strokeWeight = 0.5;
    return (
        <Map style={{height: 400}} useAMapUI={true} amapkey={'819d0e1d0c88bb8de67a4b8949e2597a'} plugins={['ToolBar']}
             zoom={14}>
            {run_state === -1 ? null : run_state === 3 ? null : <Markers
                markers={allMarkers}
                render={renderMarkerLayout}/>
            }
            {run_state === -1 ? null : run_state === 3 ? null : <Markers
                markers={ueMarkers}
                render={renderMarkerLayout}/>
            }
            {run_state === -1 ? null : run_state === 3 ? null :
                paths.map(record => (
                    <Polyline
                        path={record}
                        visible={true}
                        showDir={true}
                        style={{
                            strokeColor: " #3399ff",
                            strokeWeight: 1,
                            geodesic: true,
                            strokeStyle: "dashed"
                        }}
                    />
                ))
            }
        </Map>
    );
}

export default TuoPuMap;
