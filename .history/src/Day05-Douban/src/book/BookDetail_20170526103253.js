/*
 * @Author: yewei 
 * @Date: 2017-05-17 13:33:03 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 10:32:52
 * 
 * 图书详情
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    ListView
} from 'react-native';

import Utils from '../common/Utils';
import ServiceURL from '../common/Service';
import Header from '../common/Header';
import BookItem from '../book/BookItem';

export default class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    /**
     * 组件加载的时候，请求图书的详情数据
     * 
     * 
     * @memberof BookDetail
     */
    componentDidMount() {
        let bookId = this.props.id;
        let url = `${ServiceURL.book_search_id}/${bookId}`;
        Utils.fetchGet(url, (data) => {
            // console.log(data);
            this.setState({
                data: data
            })
        }, (err) => {
            alert(err);
        });
    }

    render() {
        let bookData = this.state.data;
        console.log(bookData);

        return (
            <ScrollView style={styles.flex_1}>
                {
                    this.state.data
                        ?
                        <View>
                            {/*详情页的头部*/}
                            <Header navigator={this.props.navigator} initObj={{ backName: '图书', title: bookData.title }} />
                            <BookItem row={bookData} />
                            <View>
                                <Text style={[styles.title]}>图书简介</Text>
                                <Text style={styles.text}>{bookData.summary}</Text>
                            </View>
                            <View>
                                <Text style={[styles.title]}>作者简介</Text>
                                <Text style={styles.text}>{bookData.author_intro}</Text>
                            </View>
                            <View style={{ height: 50 }}></View>
                        </View>
                        : Utils.loading
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    flex_1: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        marginLeft: 10,
        marginRight: 10,
        color: '#000D22',
        textAlign: 'justify'
    }
});