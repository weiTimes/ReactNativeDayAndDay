/**
 * book list
 * @yewei
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * 搜索框的点击事件
   * @return {[type]} [description]
   */
  _search() {}

  render() {
    return (
      <ScrollView style={styles.flex_1}>
        <View style={[styles.search, styles.row]}>
          <TouchableOpacity style={styles.btn} onPress={() => this._search()}>
            <Text style={styles.btnText}>搜索</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flex_1: {
    flex: 1,
    marginTop: 5
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
    alignItems: 'center'
  },
  btnText: {
    color: '#fff'
  }
});
