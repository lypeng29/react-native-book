/**
 * get
 */
import React, { Component } from 'react';
import {
    Dimensions,//获取设备屏幕的宽高
    ActivityIndicator
} from 'react-native';

var Util = {
    // 屏幕尺寸
    windowSize: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },

    // get
    getRequest : function(url, successcallback,failcallback){
        fetch(url)
        .then((response)=>response.json())
        .then((responseData)=>successcallback(responseData))
        .catch((error)=>failcallback(error))
    },

    // loading
    loading : <ActivityIndicator style={{marginTop: 200}} />
}

export default Util;