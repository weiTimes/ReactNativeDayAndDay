/**
 * day04 WriteMode
 */
'use strict';
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title]}>{this.props.title}</Text>
        <Text style={[styles.text]}>{this.props.author}</Text>
        <Text style={[styles.text]}>{this.props.time}</Text>
      </View>
    );
  }
}

export default class WriteMode extends Component {
  constructor(props) {
    super(props);
    const data = [
      {
        id: 1,
        title: "React-Native  Guide",
        author: "edagarli",
        time: "2016-03-14"
      }, {
        id: 2,
        title: "how to learn",
        author: "edagarli",
        time: "2016-03-14"
      }, {
        id: 3,
        title: "just do it",
        author: "edagarli",
        time: "2016-03-14"
      }
    ]
    this.state = {
      articles: data
    };
  }
  render() {
    return (
      <ScrollView>
        {this.state.articles.map(function(article) {
          return <Article key={article.id} title={article.title} author={article.author} time={article.time}/>
        })
}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  title: {
    color: 'red',
    fontSize: 40
  },
  text: {
    fontSize: 20
  }
});
