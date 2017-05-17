/*
 * @Author: yewei 
 * @Date: 2017-05-17 13:46:02 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-17 16:16:49
 * 
 * 图书详情的头部
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import LeftIcon from '../common/LeftIcon';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    /**
     * 回退点击事件
     * 
     * 
     * @memberof Header
     */
    _back() {
        this.props.navigator.pop();
    }
    render() {
        let initObj = this.props.initObj;

        return (
            <View style={[styles.header, styles.row, styles.center]}>
                <TouchableOpacity style={[styles.row, styles.center]} onPress={() => this._back()}>
                    <LeftIcon />
                    <Text style={styles.fontFFF}>{initObj.backName}</Text>
                </TouchableOpacity>
                <View style={[styles.titleView, styles.center]}>
                    <Text style={[styles.fontFFF, styles.titleText]} numberOfLines={1}>{initObj.title}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleView: {
        flex: 1
    },
    titleText: {
        marginLeft: -20,
        width: 200
    },
    header: {
        height: 50,
        backgroundColor: '#3497ff',
        paddingTop: 14
    },
    row: {
        flexDirection: 'row'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontFFF: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
});