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
    ScrollView
} from 'react-native';

export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    }
});