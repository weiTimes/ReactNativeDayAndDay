/*
 * @Author: yewei 
 * @Date: 2017-05-16 11:02:26 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-17 14:10:47
 * 
 * 跳转导航
 * 封装Navigator
 * 所有的切换过场动画都是从底部往上；回退是从上往下
 * 这里需要注意是使用{...route.passProps}模仿Navigator的passProps
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navigator
        initialRoute={{ name: '', component: this.props.component, index: 0 }} // 初始化路由组件，组件由父组件传入
        configureScene={() => { return Navigator.SceneConfigs.FloatFromBottom }} // 配置跳转动画 从底部到顶部
        renderScene={(route, navigator) => { // 渲染初始化的组件，并且传递参数给下一个组件
          const Component = route.component;
          return (
            <View style={styles.container}>
              <Component navigator={navigator} route={route} {...route.passProps} />
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
