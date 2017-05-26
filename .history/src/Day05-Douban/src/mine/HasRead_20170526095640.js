/*
 * @Author: yewei 
 * @Date: 2017-05-26 09:34:25 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 09:56:40
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
    ScrollView,
    ListView
} from 'react-native';

import Utils from '../common/Utils';
import ServiceURL from '../common/Service';
import Header from '../common/Header';

export default class HasRead extends Component {
    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentDidMount() {
        this._loadData();
    }

    /**
     * 将拿到的我的阅读数据渲染到属兔
     * 
     * 
     * @memberof HasRead
     */
    _loadData() {
        let baseURL = ServiceURL.has_read_book;
        Utils.fetchGet(baseURL, (data) => {
            if (!data.collections || !data.collections.length) {

            }
            console.log(data);

        }, (err) => {
            alert(err);
        });
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
        flex: 1,
    }
});