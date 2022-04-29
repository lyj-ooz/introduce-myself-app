import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

function WebViewScreen({uri, handleLoadProgress}) {
  return (
    <View style={{flex: 1}}>
      <WebView source={{uri}} onLoadProgress={handleLoadProgress} />
    </View>
  );
}

export default WebViewScreen;
