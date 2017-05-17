/*
 * @Author: yewei 
 * @Date: 2017-05-16 11:27:27 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-17 11:08:30
 * 
 * 提供公共的工具方法
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    PixelRatio,
    ActivityIndicator
} from 'react-native';

const Utils = {
    // 最小线宽
    pixel: 1 / PixelRatio.get(),
    // 屏幕尺寸
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    /**
     * 基于fetch的get方法
     */
    fetchGet: (url, successCallback, failCallback) => {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch((err) => {
                failCallback(err);
            });
    },
    /**
     * loading效果
     */
    loading: <ActivityIndicator color="#3e00ff" style={{ marginTop: 40, marginLeft: 0 }} />
}

export default Utils;
