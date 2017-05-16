/**
 * 封装navigator
 * 所有的切换动画都是从底部往上；回退是从上往下
 * 这里需要注意是使用{...route.passProps}模仿NavigatorIOS的passProps
 * @yewei
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, NavigatorIOS} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class NavigationDefine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navigation initialRoute={{
        name: '',
        component: this.props.component,
        index: 0
      }} configureScene={() => {
        return Navigation.SceneConfigs.FloatFromBottom;
      }} renderScene={(route, navigator) => {
        const Component = route.component;
        return (
          <View style={{
            flex: 1
          }}>
            <Component navigator={navigator} route={route} {...route.passProps}/>
          </View>
        );
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
