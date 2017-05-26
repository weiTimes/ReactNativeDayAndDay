/*
 * @Author: yewei 
 * @Date: 2017-05-26 14:26:06 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 14:37:23
 * 
 * ListView 下拉加载更多
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import ShotList from './src/ShotList';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        return <Component navigator={navigator} {...route.params} />
    }

    render() {
        return (
            <View>
                <Navigator
                    initialRoute={{
                        component: ShotList,
                        title: '首页'
                    }}
                    renderScene={(route, navigator) => this._renderScene(route, navigator)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
});