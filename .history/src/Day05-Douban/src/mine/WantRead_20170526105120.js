/*
 * @Author: yewei 
 * @Date: 2017-05-26 09:35:12 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 10:51:08
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
    ScrollView,
    ListView
} from 'react-native';

import Header from '../common/Header';
import ServiceURL from '../common/Service';
import Utils from '../common/Utils';

export default class WantRead extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),
            isLoading: true
        };
    }

    componentDidMount() {
        this._loadData();
    }

    _loadData() {
        let ds = ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let baseURL = ServiceURL.want_read_book;

        this.setState({
            isLoading: true
        });
        Utils.fetchGet(baseURL, (result) => {
            console.log(result);
            if (!result.collections || !result.collections.length) {
                this.setState({
                    isLoading: false
                });
                return alert('没有相应的数据');
            }
            let collections = result.collections;
            this.setState({
                dataSource: ds.cloneWithRows(collections),
                isLoading: false
            });

        }, (error) => {
            alert(error);
        });
    }

    renderRow(item) {
        return ();
    }

    render() {
        return (
            <ScrollView style={styles.flex_1}>
                <Header navigator={this.props.navigator} initObj={{ backName: this.props.backName, title: this.props.title }} />
                {
                    this.state.isLoading ? Utils.loading :
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(item) => this._renderRow(item)}
                        />
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1,
        backgroundColor: '#fff'
    }
});