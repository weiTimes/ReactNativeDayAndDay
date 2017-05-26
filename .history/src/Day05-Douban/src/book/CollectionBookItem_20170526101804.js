/*
 * @Author: yewei 
 * @Date: 2017-05-26 10:13:52 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 10:18:03
 * 
 * 我的阅读 图书列表中的每一个item
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

import Utils from '../common/Utils';

export default class CollectionBookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        return (
            <TouchableOpacity style={[styles.row, styles.item]} {...this.props}>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    item: {
        height: 120,
        borderTopWidth: Utils.pixel,
        borderBottomWidth: Utils.pixel,
        marginTop: 5,
        marginBottom: 5,
        borderColor: '#ccc'
    }
});