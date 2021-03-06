/*
 * @Author: yewei 
 * @Date: 2017-05-26 14:26:06 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 14:33:42
 * 
 * ListView 下拉加载更多
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import ShotList from './src/ShotList';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{
                        component: ShotList,
                        title: '首页'
                    }}
                >
                </Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0af'
    }
});