import React, {useState} from 'react';
import {FlatList, StyleSheet, View, useWindowDimensions} from 'react-native';
import Page from './Page';
import Indicator from './Indicator';

interface ICarousel {
  gap?: number;
  offset?: number;
  pages: any[];
  pageWidth: number;
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});

function ImageCarousel({pages, pageWidth, gap = 0, offset = 0}: ICarousel) {
  const [page, setPage] = useState(0);
  const window = useWindowDimensions();

  function renderItem({item}: any) {
    return (
      <Page
        item={item}
        style={{
          width: window.width,
          marginHorizontal: gap / 2,
          // marginHorizontal: 0,
        }}
      />
    );
  }

  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item: any) => `page__${item.id}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={window.width}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.indicatorWrapper}>
        {Array.from({length: pages.length}, (_, i) => i).map(i => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </View>
    </View>
  );
}

export default ImageCarousel;
