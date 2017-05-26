/*
 * @Author: yewei 
 * @Date: 2017-05-26 10:13:52 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 10:27:58
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
                    <Image source={{ uri: ROW.book.image }} style={styles.book_img} />
                </View>
                <View style={styles.con}>
                    <View>
                        <Text style={styles.title} numberOfLines={1}>{ROW.book.title}</Text>
                    </View>
                    <View style={styles.margin10}>
                        <Text style={[styles.publisher, styles.title]} numberOfLines={1}>{ROW.book.publisher}</Text>
                    </View>
                    <View style={styles.margin10}>
                        <Text style={[styles.publisher, styles.title]} numberOfLines={1}>{ROW.book.author}</Text>
                    </View>
                    <View style={[styles.row, styles.margin10]}>
                        <Text style={styles.price}>{ROW.book.price}</Text>
                        <Text style={styles.pages}>{ROW.book.pages}页</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    price: {
        color: '#2BB2A3',
        fontSize: 16
    },
    pages: {
        marginLeft: 10,
        color: '#A7A0A0'
    },
    margin10: {
        marginTop: 10
    },
    publisher: {
        color: '#A3A3A3',
        fontSize: 13
    },
    con: {
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        width: 200
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    book_img: {
        width: 100,
        height: 100,
        resizeMode: Image.resizeMode.contain
    },
    row: {
        flexDirection: 'row',
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