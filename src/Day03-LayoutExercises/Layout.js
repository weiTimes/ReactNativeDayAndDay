/**
 * day03 Layout02
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.height160, styles.row]}>
          <View style={[styles.height160, styles.part_1_left]}>
            <Text style={[styles.font14, styles.marTop18, styles.marLeft10, styles.green]}>我们约吧</Text>
            <Text style={[styles.font10, styles.marTop14, styles.marLeft10]}>恋爱家人好朋友</Text>
            <Image style={styles.yue} source={{
              uri: 'https://avatars1.githubusercontent.com/u/5710228?v=3&s=460'
            }}/>
          </View>
          <View style={[styles.height160, styles.part_1_right]}>
            <View style={[
              styles.row, {
                flex: 1
              }
            ]}>
              <View style={{
                flex: 1
              }}>
                <Text style={[
                  styles.font14, {
                    marginLeft: 30
                  },
                  styles.red
                ]}>超低价值</Text>
                <Text style={[styles.font14, styles.life10]}>十元惠生活</Text>
              </View>
              <View style={[{
                  flex: 1,
                  marginTop: -13
                }
              ]}>
                <Image style={[styles.hanbao]} source={{
                  uri: 'https://avatars1.githubusercontent.com/u/5710228?v=3&s=460'
                }}/>
              </View>
            </View>
          </View>
          <View style={[{
              flex: 1,
              flexDirection: 'row',
              borderTopWidth: 0.5,
              borderColor: '#DDD8CE'
            }
          ]}>
            <View style={{
              flex: 1,
              borderRightWidth: 1,
              borderColor: '#DDD8CE'
            }}>
              <Text style={{
                color: '#F742AB',
                marginLeft: 5,
                fontWeight: 'bold',
                fontSize: 15,
                marginTop: 8
              }}>聚餐宴请</Text>
              <Text style={{
                fontSize: 12,
                marginTop: 4,
                marginLeft: 5
              }}>朋友家人常聚聚</Text>
              <Image style={{
                height: 25,
                width: 25,
                alignSelf: 'center'
              }} source={{
                uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'
              }}></Image>
            </View>
            <View style={{
              flex: 1
            }}>
              <Text style={[
                styles.font14, {
                  color: '#FF8601',
                  marginTop: 8,
                  marginLeft: 5
                }
              ]}>名店抢购</Text>
              <Text style={[{
                  marginLeft: 5,
                  fontSize: 12,
                  marginTop: 4
                }
              ]}>距离结束</Text>
              <Text style={[{
                  marginLeft: 5,
                  fontSize: 12,
                  marginTop: 4
                }
              ]}>12:06:12分</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hanbao: {
    height: 55,
    width: 55
  },
  life10: {
    fontSize: 12,
    marginTop: 14,
    marginLeft: 30,
    color: 'black'
  },
  marTop18: {
    marginTop: 18
  },
  marTop14: {
    marginTop: 14
  },
  font14: {
    fontSize: 14
  },
  font10: {
    fontSize: 12
  },
  yue: {
    height: 80,
    width: 80
  },
  green: {
    color: '#55A44B',
    fontWeight: '900'
  },
  red: {
    color: '#FF3F0D',
    fontWeight: '900'
  },
  part_1_left: {
    flex: 1,
    borderColor: '#dcd7cd',
    borderRightWidth: 0.5,
    borderBottomWidth: 1
  },
  part_1_right: {
    flex: 2,
    borderColor: '#dcd7cd',
    borderBottomWidth: 1
  },
  height160: {
    height: 160
  },
  row: {
    flexDirection: 'row',
    paddingTop: 20
  },
  container: {
    flex: 1
  }
});
