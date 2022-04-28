import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import CustomText from '../components/text/CustomText';

const styles = StyleSheet.create({
  contentWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  detailTitle: {
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  detailContent: {
    fontWeight: '200',
    lineHeight: 21,
  },
});

function ProfileDetails({route}) {
  const {detail} = route.params;
  return (
    <ScrollView contentContainerStyle={styles.contentWrapper}>
      <CustomText customTextType="large" customTextStyle={styles.detailTitle}>
        {detail.title}
      </CustomText>
      <CustomText
        customTextType="medium"
        customTextStyle={styles.detailContent}>
        {detail.content}
      </CustomText>
    </ScrollView>
  );
}

export default ProfileDetails;
