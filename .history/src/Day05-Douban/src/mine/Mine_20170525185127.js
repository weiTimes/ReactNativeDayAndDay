/*
 * @Author: yewei 
 * @Date: 2017-05-17 14:25:41 
 * @Last Modified by:   yewei 
 * @Last Modified time: 2017-05-17 14:25:41 
 * 
 * 个人中心 我的
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Utils from '../common/Utils';
import ServiceURL from '../common/Service';

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const URLS = [ServiceURL.has_read_book, ServiceURL.want_read_book, 'https://github.com/edagarli', 'https://github.com/edagarli/React-Douban'];
        const ITEMS = ['我读过的书', '我想读的书', '关于我', 'Github'];
        let JSXDOM = [];
        ITEMS.map((value, key) => {
            console.log(`${value}: ${key}`);
            JSXDOM.push(
                <TouchableOpacity key={value}>
                    <View style={[styles.item, styles.row]}>
                        <Text style={[styles.font, styles.flex_1]}>{value}</Text>
                    </View>
                </TouchableOpacity>
            );
        });
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    {JSXDOM}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    item: {
        height: 40,
        justifyContent: 'center',
        borderTopWidth: Utils.pixel,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    font: {
        fontSize: 15,
        marginLeft: 5,
        marginRight: 10,
    },
    flex_1: {
        flex: 1
    },
    wrapper: {
        marginTop: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    }
});