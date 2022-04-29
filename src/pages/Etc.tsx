import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import WebViewScreen from '../components/webview/WebViewScreen';

function Etc() {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoadProgress({nativeEvent}) {
    if (nativeEvent.progress !== 1 && isLoading === false) {
      setIsLoading(true);
    } else if (nativeEvent.progress === 1) {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebViewScreen
        uri="https://github.com/lyj-ooz"
        handleLoadProgress={handleLoadProgress}
      />
      {isLoading && (
        <View
          style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Text>잠시 기다려주세요...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default Etc;
