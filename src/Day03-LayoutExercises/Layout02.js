/**
 * day03 layout
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, NavigatorIOS} from 'react-native';

import Index from './pages/IndexPage'

export default class Layout02 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // 导航栏
    return (<NavigatorIOS style={styles.container} initialRoute={{
      title: '首页',
      component: Index
    }}/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
