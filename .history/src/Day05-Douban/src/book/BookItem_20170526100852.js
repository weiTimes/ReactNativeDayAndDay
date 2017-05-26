/*
 * @Author: yewei 
 * @Date: 2017-05-17 11:19:16 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 10:08:52
 * 
 * 图书列表项
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

export default class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        let row = this.props.row;
        console.log(row);

        return (
            <TouchableOpacity style={[styles.row, styles.item]} {...this.props}>
                <View style={styles.center}>
                    {/*渲染图书的图片*/}
                    <Image source={{ uri: row.image }} style={styles.bookImg} />
                </View>
                <View style={styles.content}>
                    <View>
                        {/*限制一行显示，并且限制宽度，超过宽度则显示省略号*/}
                        <Text style={styles.title} numberOfLines={1}>{row.title}</Text>
                    </View>
                    <View style={styles.publish}>
                        <Text style={styles.publishText} numberOfLines={1}>{row.publisher}</Text>
                    </View>
                    <View style={styles.author}>
                        <Text style={styles.publishText} numberOfLines={1}>{row.author}</Text>
                    </View>
                    <View style={[styles.row, { marginTop: 10 }]}>
                        <Text style={styles.price}>{row.price}</Text>
                        <Text style={styles.pages}>{row.pages}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    price: {
        color: '#2bb2a3',
        fontSize: 16
    },
    pages: {
        marginLeft: 10,
        color: '#a7a0a0'
    },
    publishText: {
        width: 200,
        color: '#2bb2a3',
        fontSize: 13
    },
    publish: {
        marginTop: 10
    },
    author: {
        marginTop: 10
    },
    content: {
        marginTop: 10,
        marginLeft: 10
    },
    title: {
        width: 200
    },
    bookImg: {
        width: 80,
        height: 100,
        resizeMode: Image.resizeMode.contain // 图片的展示方式
    },
    row: {
        flexDirection: 'row'
    },
    item: {
        height: 120,
        borderTopWidth: Utils.pixel, // 线框的最小宽度
        borderBottomWidth: Utils.pixel,
        marginTop: 5,
        marginBottom: 5,
        borderColor: '#ccc'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});