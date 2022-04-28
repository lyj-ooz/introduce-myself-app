import React from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ImageCarousel from '../components/imagecarousel/ImageCarousel';
import user from '../../model/user';
import photo from '../../model/photo';
import CustomText from '../components/text/CustomText';

// const screenWidth = Math.round(Dimensions.get('window').width);

const PAGES = [
  {
    num: 1,
    color: '#86E3CE',
  },
  {
    num: 2,
    color: '#D0E6A5',
  },
  {
    num: 3,
    color: '#FFDD94',
  },
  {
    num: 4,
    color: '#FA897B',
  },
  {
    num: 5,
    color: '#CCABD8',
  },
];

const styles = StyleSheet.create({
  textWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  userNameText: {
    fontWeight: 'bold',
    paddingVertical: 7,
  },
  userInfoText: {
    color: '#555',
    paddingBottom: 2,
  },
  userBriefIntro: {
    paddingVertical: 7,
  },
});

function Profile() {
  const window = useWindowDimensions();

  return (
    <ScrollView>
      <ImageCarousel pages={photo} pageWidth={window.width} />

      <View style={styles.textWrapper}>
        <CustomText
          customTextType="large"
          customTextStyle={styles.userNameText}>
          {user.name}
        </CustomText>
        <CustomText
          customTextType="small"
          customTextStyle={styles.userInfoText}>
          {user.phone}
        </CustomText>
        <CustomText
          customTextType="small"
          customTextStyle={styles.userInfoText}>
          {user.email}
        </CustomText>
        <CustomText
          customTextType="medium"
          customTextStyle={styles.userBriefIntro}>
          {user.briefIntro}
        </CustomText>
      </View>
    </ScrollView>
  );
}

export default Profile;
