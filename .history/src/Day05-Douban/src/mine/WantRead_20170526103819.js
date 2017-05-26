/*
 * @Author: yewei 
 * @Date: 2017-05-26 09:35:12 
 * @Last Modified by:   yewei 
 * @Last Modified time: 2017-05-26 09:35:12 
 * 
 * 我想读的书
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

export default class WantRead extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <ScrollView style={styles.flex_1}>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1,
    }
});