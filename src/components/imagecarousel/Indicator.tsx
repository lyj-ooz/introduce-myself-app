import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  indicator: {
    marginVertical: 4,
    marginHorizontal: 2,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});

function Indicator({focused}: {focused: boolean}) {
  return (
    <View
      style={[
        styles.indicator,
        focused ? {backgroundColor: '#262626'} : {backgroundColor: '#dfdfdf'},
      ]}
    />
  );
}

export default Indicator;
