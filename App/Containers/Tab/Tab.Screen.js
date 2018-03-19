import React, { Component } from 'react'
import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native'

import TabOne from './TabOne.Screen'
import TabTwo from './TabTwo.Screen'

import styles from './Tab.Style'
import images from '../../Themes/Images'

export default class TabScreen extends Component {
  constructor(props) {
    super(props)
    backPress = this.handleBackPress.bind(this)
    this.state = {
      isTabOneActive: true
    }
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', backPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', backPress)
  }

  handleBackPress() {
    this.props.navigation.goBack()
    return true
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity onPress={() => this.handleBackPress()}>
            <Image style={styles.icBack} source={images.ic_back} />
          </TouchableOpacity>
          <Text style={styles.titleToolbar}>TAB</Text>
          <View style={styles.icBack} />
        </View>

        <View style={{ flex: 1 }}>
          {this.state.isTabOneActive ? <TabOne /> : <TabTwo />}
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={
              this.state.isTabOneActive ? styles.btnActive : styles.btnPassive
            }
            onPress={() => {
              this.setState({
                isTabOneActive: true
              })
            }}
          >
            <Text
              style={
                this.state.isTabOneActive
                  ? styles.textActive
                  : styles.textPassive
              }
            >
              TAB ONE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              this.state.isTabOneActive ? styles.btnPassive : styles.btnActive
            }
            onPress={() => {
              this.setState({
                isTabOneActive: false
              })
            }}
          >
            <Text
              style={
                this.state.isTabOneActive
                  ? styles.textPassive
                  : styles.textActive
              }
            >
              TAB TWO
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}