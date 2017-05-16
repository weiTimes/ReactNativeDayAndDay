/**
 * day03 layout 首页
 */
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Swiper from 'react-native-swiper';

const sliderImgs = ['https://avatars1.githubusercontent.com/u/5710227?v=3&s=460', 'https://avatars1.githubusercontent.com/u/5710226?v=3&s=460', 'https://avatars1.githubusercontent.com/u/5710228?v=3&s=460'];

const BUIcon = ['https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png', 'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png', 'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png', 'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'];

const Images = ['http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png', 'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Swiper index={1} style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
        <Image style={[styles.slide]} source={{
          uri: sliderImgs[0]
        }}/>
        <Image style={[styles.slide]} source={{
          uri: sliderImgs[1]
        }}/>
        <Image style={[styles.slide]} source={{
          uri: sliderImgs[2]
        }}/>
      </Swiper>
    );
  }
}

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Slider/>
          <View style={[styles.sbu_red, styles.sbu_view]}>
            <TouchableHighlight underlayColor={'#FA6778'} style={{
              flex: 1
            }}>
              <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
                <View style={[styles.sub_con_flex, styles.sub_text]}>
                  <Text style={[styles.font16]}>酒店</Text>
                </View>
                <View style={[styles.sub_con_flex]}>
                  <Image style={[styles.sbu_icon_img]} source={{
                    uri: BUIcon[0]
                  }}></Image>
                </View>
              </View>
            </TouchableHighlight>
            <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
              <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                <Text style={[styles.font16]}>海外</Text>
              </View>
              <View style={[styles.sub_con_flex, styles.sub_text]}>
                <Text style={[styles.font16]}>周边</Text>
              </View>
            </View>
            <View style={[styles.sbu_flex]}>
              <View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
                <Text style={[styles.font16]}>团购.特惠</Text>
              </View>
              <View style={[styles.sub_con_flex, styles.sub_text]}>
                <Text style={[styles.font16]}>客栈.公寓</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sbu_red: {
    backgroundColor: '#FA6778',
    borderColor: '#FA6778',
    marginTop: -70
  },
  sbu_view: {
    height: 84,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row'
  },
  wrapper: {
    height: 80
  },
  slide: {
    height: 80,
    resizeMode: Image.resizeMode.contain
  },
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1
  },
  sbu_flex: {
    flex: 1
  },
  sbu_borderRight: {
    borderColor: '#fff',
    borderRightWidth: 0.5
  },
  sbu_icon_img: {
    height: 40,
    width: 40,
    resizeMode: Image.resizeMode.contain
  },
  sub_con_flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sub_text: {
    justifyContent: 'center'
  },
  font16: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: '900'
  },
  sbu_borderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff'
  },
  img_view: {
    height: 62,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  img_flex: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  img_wh: {
    height: 59,
    borderRightWidth: 0,
    resizeMode: Image.resizeMode.contain
  }
});
