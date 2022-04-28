import React from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';

// 아래 인터페이스 분리하기
// interface IPhoto {
//   id: number;
//   src: ImageSourcePropType;
// }

interface IPage {
  item: {id: number; src: ImageSourcePropType};
  style: ViewStyle;
}

const styles = StyleSheet.create({
  pageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 20,
  },
});

function Page({item, style}: IPage) {
  return (
    <View
      style={
        (styles.pageItem,
        {
          // backgroundColor: item.color,
          width: style.width,
          marginHorizontal: style.marginHorizontal,
        })
      }>
      {/* <Text>{item.id}</Text> */}
      <Image
        source={item.src}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}
      />
    </View>
  );
}

export default Page;
