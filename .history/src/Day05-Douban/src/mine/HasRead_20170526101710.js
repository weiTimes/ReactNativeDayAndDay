/*
 * @Author: yewei 
 * @Date: 2017-05-26 09:34:25 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 10:17:10
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
import CollectionBookItem from '../book/CollectionBookItem';
import BookDetail from '../book/BookDetail';

export default class HasRead extends Component {
    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),
            isLoading: true // 是否正在加载
        };
    }

    componentDidMount() {
        this._loadData();
    }

    /**
     * 将拿到的我的阅读数据渲染到视图
     * 
     * 
     * @memberof HasRead
     */
    _loadData() {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        let baseURL = ServiceURL.has_read_book;

        this.setState({
            isLoading: true
        });
        Utils.fetchGet(baseURL, (data) => {
            if (!data.collections || !data.collections.length) {
                this.setState({
                    isLoading: false
                });
                return alert('没有相应数据');
            }
            let collections = data.collections;
            console.log(collections);

            this.setState({
                dataSource: ds.cloneWithRows(collections),
                isLoading: false
            });

        }, (err) => {
            alert(err);
        });
    }

    _loadPage(id) {
        this.props.navigator.push({
            component: BookDetail,
            passProps: id
        });
    }

    /**
     * 渲染ListView的每一行
     * 
     * @param {any} item 
     * 
     * @memberof HasRead
     */
    _renderRow(item) {
        return (
            <CollectionBookItem row={item} onPress={() => this._loadPage(item.id)} />
        );
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
                    {
                        this.state.isLoading ? Utils.loading :
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={(item) => this._renderRow(item)}
                            />
                    }
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