/*
 * @Author: yewei 
 * @Date: 2017-05-26 09:34:25 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 09:42:48
 * 
 * 我的阅读
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

import Header from '../common/Header';

export default class HasRead extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <ScrollView style={styles.flex_1}>
                <View>
                    <Header
                        navigator={this.props.navigator}
                        initObj={{
                            backName: this.props.backName,
                            title: this.props.title
                        }}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1
    }
});