import React from "react";


const loadUI = () => {
    window.AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
        initPage(SimpleMarker);
    })
};

const initPage = (SimpleMarker) => {
    const map = this.props.__map__;
    // 这个例子来自官方文档 http://lbs.amap.com/api/javascript-api/guide/amap-ui/intro
    new SimpleMarker({
        //前景文字
        iconLabel: 'A',
        //图标主题
        iconTheme: 'default',
        //背景图标样式
        iconStyle: 'red',
        //...其他Marker选项...，不包括content
        map: map,
        position: [120, 31]
    });

    //创建SimpleMarker实例
    new SimpleMarker({
        //前景文字
        iconLabel: {
            innerHTML: '<i>B</i>', //设置文字内容
            style: {
                color: '#fff' //设置文字颜色
            }
        },
        //图标主题
        iconTheme: 'fresh',
        //背景图标样式
        iconStyle: 'black',
        //...其他Marker选项...，不包括content
        map: map,
        position: [120, 29]
    });
};

/**
 * @return {null}
 */
function UIMarker(props) {
    loadUI();
    return null;
}

export default UIMarker;

