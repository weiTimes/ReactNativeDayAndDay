/*
 * @Author: yewei 
 * @Date: 2017-05-16 11:25:17 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-17 11:55:11
 * 
 * 搜索组件
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import Utils from './Utils';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.flex_1}>
                <TextInput style={[styles.flex_1, styles.input]} {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1,
    },
    input: {
        borderWidth: Utils.pixel, // 最小线宽
        height: 40,
        borderColor: '#DDDDDD',
        paddingLeft: 5,
    }
});