/*
 * @Author: yewei 
 * @Date: 2017-05-17 10:47:19 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-17 13:36:51
 * 
 * 图书列表
 */

'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ListView } from 'react-native';

import Utils from '../common/Utils'; // 工具函数
import ServiceURL from '../common/Service'; // api服务URL
import Search from '../common/Search'; // 搜索框组件
import BookItem from '../book/BookItem';
import BookDetail from '../book/BookDetail';
export default class BookList extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      show: false, // 是否拿到ListView的展示数据
      keywords: 'React',
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    this._getData(); // 组件加载的时候获取图书的数据
  }

  /**
   * 根据关键词查询
   * 
   * 
   * @memberof BookList
   */
  _getData() {
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    let baseURL = `${ServiceURL.book_search}?count=10&q=${this.state.keywords}`;
    // 开启loading
    this.setState({
      show: false
    });
    Utils.fetchGet(baseURL, (data) => {
      // 如果没有图书数据，则关闭loading, 给出提示信息
      if (!data.books || !data.books.length) {
        this.setState({
          show: true
        });
        return alert('没有相应的数据');
      }
      let books = data.books;
      // 将拿到的数据添加到ListView的处理源数据, 关闭loading 
      this.setState({
        dataSource: ds.cloneWithRows(books), // 每次搜索更改ListView的数据源
        show: true
      });
    }, (err) => {
      alert(err);
    });
  }

  /**
   * 对输入搜索图书的关键词进行处理
   * 
   * 
   * @memberof BookList
   */
  _changeText(val) {
    this.setState({
      keywords: val // 改变关键字为输入的内容
    })
  }

  /**
   * 搜索框的点击事件
   * @return {[type]} [description]
   */
  _search() {
    this._getData();
  }

  /**
   * 根据id跳转到相应的图书详情页
   * 
   * @param {any} id 
   * 
   * @memberof BookList
   */
  _loadPage(id) {
    this.props.navigator.push({
      component: BookDetail,
      passProps: {
        id: id
      }
    });
  }

  /**
   * 对每一条ListView的数据进行处理
   * 
   * 
   * @memberof BookList
   */
  _renderRow(row) {
    return (
      // 渲染图书列表项
      <BookItem row={row} onPress={() => this._loadPage(row.id)} />
    );
  }

  render() {
    return (
      <ScrollView style={[styles.flex_1, { marginTop: 20 }]}>
        <View style={[styles.search, styles.row]}>
          <View style={styles.flex_1}>
            {/*输入框*/}
            <Search placeholder="请输入图书的名称" value={this.state.keywords ? this.state.keywords : ''} onChangeText={(val) => this._changeText(val)} />
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => this._search()}>
            <Text style={styles.btnText}>搜索</Text>
          </TouchableOpacity>
        </View>
        {/*拿到展示数据则展示图书列表，没有拿到则展示loading,表示数据还在请求中*/}
        {
          this.state.show ?
            <ListView
              dataSource={this.state.dataSource} // 数据源
              renderRow={(row) => this._renderRow(row)} // 对每一条数据进行处理
            /> : Utils.loading
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  flex_1: {
    flex: 1,
  },
  search: {
    paddingLeft: 5,
    paddingRight: 5,
    height: 45
  },
  btn: {
    width: 50,
    backgroundColor: '#0091ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  btnText: {
    color: '#fff'
  }
});
