/*
 * @Author: yewei 
 * @Date: 2017-05-17 14:20:16 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-17 15:28:42
 * 
 * 电影列表
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
    ListView,
    TouchableOpacity,
    Image
} from 'react-native';

import Utils from '../common/Utils';
import ServiceURL from '../common/Service';
import Search from '../common/Search';
import WebViewComponent from '../common/WebView';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),
            keywords: 'Game of Thrones',
            show: false
        };
    }

    componentDidMount() {
        this._getData();
    }

    /**
     * 获得电影列表的数据
     * 
     * 
     * @memberof MovieList
     */
    _getData() {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let url = `${ServiceURL.movie_search}?count=10&q=${this.state.keywords}`;
        this.setState({
            show: false
        });
        Utils.fetchGet(url, (data) => {
            if (!data.subjects || !data.subjects.length) {
                this.setState({
                    show: false
                });
                return alert('电影服务有问题');
            }
            let subjects = data.subjects;
            this.setState({
                dataSource: ds.cloneWithRows(subjects),
                show: true
            });
        }, (err) => {
            alert(err);
        });
    }

    /**
     * 改变关键词状态
     * 
     * @param {any} val 
     * 
     * @memberof MovieList
     */
    _handleChange(val) {
        this.setState({
            keywords: val
        });
    }

    /**
     * 根据关键词搜索电影列表
     * 
     * 
     * @memberof MovieList
     */
    _search() {
        this._getData();
    }

    /**
     * 调到电影详情
     * douban webview
     * 
     * 
     * @memberof MovieList
     */
    _goDou(row) {
        this.props.navigator.push({
            component: WebViewComponent,
            passProps: {
                backName: '电影',
                title: row.title,
                url: row.alt
            }
        });
    }

    /**
     * 处理每一个电影数据项
     * 
     * 
     * @memberof MovieList
     */
    _renderRow(row) {
        let casts = row.casts;
        let names = []; // 存放演员名字
        for (let i in casts) {
            names.push(casts[i].name);
        }

        return (
            <View style={[styles.row, styles.item]}>
                <View>
                    <Image style={styles.img} source={{ uri: row.images.medium }} />
                </View>
                <View>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                        名称：{row.title}
                    </Text>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                        演员：{names}
                    </Text>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                        评分：{row.rating.average}
                    </Text>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                        时间：{row.year}
                    </Text>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                        标签：{row.genres}
                    </Text>
                    <TouchableOpacity style={styles.goDou} onPress={() => { this._goDou(row) }}>
                        <Text>详情</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={[styles.flex_1, styles.container]}>
                <View style={[styles.search, styles.row]}>
                    <View style={styles.flex_1}>
                        <Search placeholder="请输入电影名称" value={this.state.keywords ? this.state.keywords : ''} onChangeText={(val) => this._handleChange(val)} />
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => this._search()}>
                        <Text style={styles.fontFFF}>搜索</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.show
                        ?
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(row) => this._renderRow(row)}
                        />
                        : Utils.loading
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    goDou: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: 60,
        borderWidth: Utils.pixel,
        borderColor: '#3C9BFD',
        marginLeft: 10,
        marginTop: 5,
        borderRadius: 3
    },
    textWitdh: {
        width: 200,
        marginLeft: 10
    },
    img: {
        width: 80,
        height: 110,
        resizeMode: Image.resizeMode.contain
    },
    item: {
        marginTop: 10,
        height: 140,
        paddingTop: 15,
        paddingLeft: 10,
        borderBottomWidth: Utils.pixel,
        borderTopWidth: Utils.pixel,
        borderColor: "#ddd"
    },
    container: {
        paddingTop: 20
    },
    btn: {
        width: 50,
        backgroundColor: '#0091FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    fontFFF: {
        color: '#fff'
    },
    flex_1: {
        flex: 1,
    },
    search: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 45
    },
    row: {
        flexDirection: 'row'
    }
});