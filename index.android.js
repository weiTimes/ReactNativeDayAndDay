/*
 * @Author: yewei 
 * @Date: 2017-05-16 10:47:45 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-16 10:50:00
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import HelloWorld from './src/Day01-HelloWorld/HelloWorld.js'; // day01 HelloWorld
// import ImageDemo from './src/Day02-BasicExercises/ImageDemo'; // day02 Image && Layout01
// import Layout from './src/Day03-LayoutExercises/Layout'; // day03 layout01
// import Layout02 from './src/Day03-LayoutExercises/Layout02'; // day03 layout02
import WriteMode from './src/Day04-WriteModal/WriteMode'; // day04 WriteMode
// import Douban from './src/Day05-Douban/Douban';

export default class ReactNativeDayAndDay extends Component {
  render() {
    return (
      <WriteMode />
    );
  }
}

AppRegistry.registerComponent('ReactNativeDayAndDay', () => WriteMode);
