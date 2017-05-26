/*
 * @Author: yewei 
 * @Date: 2017-05-16 10:47:45 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 14:36:52
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
// import WriteMode from './src/Day04-WriteModal/WriteMode'; // day04 WriteMode
// import Douban from './src/Day05-Douban/Douban'; // day05 豆瓣
import Root from './src/Day06-ListViewLoadMore/Root';

// export default class ReactNativeDayAndDay extends Component {
//   render() {
//     return (
//       <Douban />
//     );
//   }
// }

AppRegistry.registerComponent('ReactNativeDayAndDay', () => Root);
