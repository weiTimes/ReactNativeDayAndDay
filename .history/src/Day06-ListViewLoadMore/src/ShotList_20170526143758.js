/*
 * @Author: yewei 
 * @Date: 2017-05-26 14:32:06 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 14:36:20
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

export default class ShotList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    },
    container: {
        flex: 1,
        backgroundColor: '#0af'
    }
});