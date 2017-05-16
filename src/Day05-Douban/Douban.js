/**
 * day05 douban api
 * @yewei
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, TabBarIOS} from 'react-native';

/**
 * 导入自定义组件
 * @type {Object}
 */
import NavigationDefine from './src/common/navigation';
import BookList from './src/book/BookList';

export default class Douban extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '图书'
    };
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item title="图书" selected={this.state.selectedTab} icon={require('./src/imgs/book.png')} onPress={() => {
          this.setState({selectedTab: '图书'})
        }}>
          <NavigationDefine component={BookList}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({});
