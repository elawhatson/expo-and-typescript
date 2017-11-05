import * as React from 'react'
import { Component } from 'react'
import { Constants } from 'expo'
import { Text } from 'react-native'
import { View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

interface State {
  webViewUserAgent: string | undefined
}

export class ConstantsScreen extends Component<NavigationScreenProps<void>, State> {
  constructor(props: NavigationScreenProps<void>, context?: any) {
    super(props, context)

    this.state = {
      webViewUserAgent: undefined,
    }

    this.updateWebViewUserAgent()
  }

  public static navigationOptions = {
    title: 'Constants',
  }

  private async updateWebViewUserAgent() {
    const userAgent = await Constants.getWebViewUserAgentAsync()
    this.setState({
      webViewUserAgent: userAgent,
    })
  }

  public render() {
    const navigate = this.props.navigation.navigate

    return (
      <View
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <Text>appOvernership: "{Constants.appOwnership}"</Text>
        <Text>deviceId: "{Constants.deviceId}"</Text>
        <Text>deviceName: "{Constants.deviceName}"</Text>
        <Text>deviceYearClass: {Constants.deviceYearClass}</Text>
        <Text>expoVersion: "{Constants.expoVersion}"</Text>
        <Text>isDevice: {Constants.isDevice}</Text>
        <Text>linkingUri: "{Constants.linkingUri}"</Text>
        <Text onPress={() => navigate('Manifest')}>manifest: (Click to see)</Text>
        <Text onPress={() => navigate('Platform')}>platform: (Click to see)</Text>
        <Text>sessionId: "{Constants.sessionId}"</Text>
        <Text>statusBarHeight: {Constants.statusBarHeight}</Text>
        <Text onPress={() => navigate('SystemFonts')}>systemFonts: (Click to see)</Text>
        <Text>webViewUserAgent: "{this.state.webViewUserAgent}"</Text>
      </View>
    )
  }
}