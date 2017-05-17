/**
 * day05 douban api
 * @yewei
 */
'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import TabNavigator from 'react-native-tab-navigator'; // 底部导航栏

/**
 * 导入自定义组件
 * @type {Object}
 */
import Navigation from './src/common/Navigation';
import BookList from './src/book/BookList';
import MovieList from './src/movie/MovieList';
import Mine from './src/mine/Mine';

export default class Douban extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '图书'
    };
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === '图书'} // 是否被选中
          selectedTitleStyle={{ color: 'red' }} // 选中时的标题颜色
          title="图书" // 标题
          renderIcon={() => <Image style={styles.tabicon} source={require('./src/imgs/book.png')} />} // 默认图标
          renderSelectedIcon={() => <Image style={[styles.tabicon, styles.ontabicon]} source={require('./src/imgs/book.png')} />} // 选中时的图标，选中时给图标着为红色
          badgeText="1"
          onPress={() => this.setState({ selectedTab: '图书' })}>
          <Navigation component={BookList} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === '电影'} // 是否被选中
          selectedTitleStyle={{ color: 'red' }} // 选中时的标题颜色
          title="电影" // 标题
          renderIcon={() => <Image style={styles.tabicon} source={require('./src/imgs/movie.png')} />} // 默认图标
          renderSelectedIcon={() => <Image style={[styles.tabicon, styles.ontabicon]} source={require('./src/imgs/movie.png')} />} // 选中时的图标，选中时给图标着为红色
          badgeText="1"
          onPress={() => this.setState({ selectedTab: '电影' })}>
          <Navigation component={MovieList} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === '我的'} // 是否被选中
          selectedTitleStyle={{ color: 'red' }} // 选中时的标题颜色
          title="我的" // 标题
          renderIcon={() => <Image style={styles.tabicon} source={require('./src/imgs/about.png')} />} // 默认图标
          renderSelectedIcon={() => <Image style={[styles.tabicon, styles.ontabicon]} source={require('./src/imgs/about.png')} />} // 选中时的图标，选中时给图标着为红色
          badgeText="1"
          onPress={() => this.setState({ selectedTab: '我的' })}>
          <Navigation component={Mine} />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabicon: {
    width: 20,
    height: 20,
  },
  ontabicon: {
    tintColor: 'red'
  },
  page1: {
    flex: 1,
    backgroundColor: '#0af'
  }
});
