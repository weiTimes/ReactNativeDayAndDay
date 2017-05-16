/**
 * day02 Image demo && basic layout
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class ImageDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.redline}></View>
        <View style={styles.wrap}>
          <Text style={styles.welcome}>react-native 入门学习</Text>
          <Image style={styles.pic} source={{
            uri: 'https://avatars1.githubusercontent.com/u/5710228?v=3&s=460'
          }}/>
        </View>
        <View style={styles.container}>
          <View style={styles.subcontainer}></View>
          <View style={styles.subcontainer}></View>
          <View style={{
            flex: 10,
            backgroundColor: '#34fc09'
          }}></View>
        </View> */}
        <View style={styles.container}>
          <View style={styles.subcontainer}>
            <Text style={styles.quatext}>1 / 2宽</Text>
            <Text style={styles.quatext}>1 / 2宽</Text>
          </View>
          <View style={[
            styles.subcontainer, {
              flexDirection: 'column'
            }
          ]}>
            <Text style={styles.quatext}>1 / 4高</Text>
            <Text style={styles.quatext}>1 / 4高</Text>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quatext: {
    fontSize: 25,
    flex: 1,
    borderWidth: 1,
    borderColor: '#0af'
  },
  subcontainer: {
    flex: 5,
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  pic: {
    width: 100,
    height: 100
  },
  container: {
    flex: 1
  },
  redline: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'red'
  }
});
