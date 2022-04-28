import React from 'react';
import {StyleSheet, View} from 'react-native';

interface I_Indicator {
  focused: boolean;
}

const styles = StyleSheet.create({
  indicator: {
    marginVertical: 4,
    marginHorizontal: 0,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});

function Indicator({focused}: I_Indicator) {
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
