/*
 * @Author: yewei 
 * @Date: 2017-05-26 10:13:52 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 10:20:16
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
    TouchableOpacity,
    Image
} from 'react-native';

import Utils from '../common/Utils';

export default class CollectionBookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const ROW = this.props.row;

        return (
            <TouchableOpacity style={[styles.row, styles.item]} {...this.props}>
                <View style={styles.center}>
                    <Image source={uri: row.book.image} style={styles.book_img}/>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    book_img: {
        width: 100,
        height: 100,
        resizeMode: Image.resizeMode.contain
    },
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