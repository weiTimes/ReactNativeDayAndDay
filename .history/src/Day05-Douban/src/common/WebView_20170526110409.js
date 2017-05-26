/*
 * @Author: yewei 
 * @Date: 2017-05-17 15:00:48 
 * @Last Modified by: yewei
 * @Last Modified time: 2017-05-26 11:03:53
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import Utils from './Utils';
import Header from './Header';

export default class WebViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        console.log(this.props.url);

        return (
            <View style={styles.container}>
                <Header
                    navigator={this.props.navigator}
                    initObj={{
                        backName: this.props.backName,
                        title: this.props.title
                    }}
                />
                <View style={{ flex: 1 }}>
                    <WebView
                        contentInset={{ top: 50 }}
                        startInLoadingState={true}
                        //source={{ uri: 'http://movie.douban.com/subject/25862357/' }}
                        source={{ uri: this.props.url }}
                        style={styles.webView}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webView: {
        width: Utils.size.width,
        height: Utils.size.height - 50
    }
});