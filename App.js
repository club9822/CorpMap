/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Mapir from 'mapir-react-native-sdk'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Mapir
                    accessToken={'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAxM2Q2ZmVlZmQ3YzEzZWQ0OTcxOTM5ZWE3ZWNlNDFkNDljOTM4YTkzNThiOGY2YTU2ZDM5YmZjMTk1YzRlNTIzYjFiZDMxOTA5NmM0YmNlIn0.eyJhdWQiOiJteWF3ZXNvbWVhcHAiLCJqdGkiOiIwMTNkNmZlZWZkN2MxM2VkNDk3MTkzOWVhN2VjZTQxZDQ5YzkzOGE5MzU4YjhmNmE1NmQzOWJmYzE5NWM0ZTUyM2IxYmQzMTkwOTZjNGJjZSIsImlhdCI6MTU1NzIwNTc1MSwibmJmIjoxNTU3MjA1NzUxLCJleHAiOjE1NTcyMDkzNTEsInN1YiI6IiIsInNjb3BlcyI6WyJiYXNpYyIsImVtYWlsIl19.C3upFBexCEK9qmYYS9K7YkvkDA7O0NCco1ZQ4rKXf2zNOh6BMVCfMYlz9GnXXdpSrW475EbH8b0hAGCqhAVFbi3lhE_q48fc6_mfJa-QJERj9W_0_bImSIJxo4hEnd6C0ldZvrRJf8IoYEd-qE0LtNaCPSMFmJTzqgdxOPi0SWF6FQN2ZDPvPoix4ZoblcmPV78Tqgp33rCrRZTUjqtXJDPsjH3JBTd65g8XC0dNEZGEzkxNlZyp1v_jrATq0ghzjd8f5SsCF-gJmNYb7Th7QPROAqhMvih6_Q0Y0-m_whjGlrZs4IZOE2KafIoSP62LfLiGC7rcuod88hYvERaKuA'}
                    zoomLevel={13}
                    centerCoordinate={[51.422548, 35.732573]}
                    style={styles.container}>
                </Mapir>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
