/*
 * @Author: yewei 
 * @Date: 2017-05-17 13:50:59 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-17 13:57:50
 * 
 * 头部回退按钮的图标
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Utils from './Utils';

export default class LeftIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.back}></View>
        );
    }
}

const styles = StyleSheet.create({
    back: {
        // 画一个回退箭头突变
        borderLeftWidth: 4 * Utils.pixel,
        borderBottomWidth: 4 * Utils.pixel,
        width: 15,
        height: 15,
        transform: [{ rotate: '45deg' }],
        borderColor: '#FFF',
        marginLeft: 10
    }
});