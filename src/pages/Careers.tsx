import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import user from '../../model/user';
import CustomText from '../components/text/CustomText';

const styles = StyleSheet.create({
  careerWrapper: {
    padding: 15,
  },
  companyName: {
    fontWeight: 'bold',
  },
  job: {
    fontWeight: '300',
  },
});

function Careers() {
  return (
    <ScrollView>
      {user.careers.map(career => (
        <View style={styles.careerWrapper} key={career.companyName}>
          <CustomText
            customTextType="large"
            customTextStyle={styles.companyName}>
            {`💼 ${career.companyName}`}
          </CustomText>
          <CustomText customTextType="medium" customTextStyle={styles.job}>
            {career.job}
          </CustomText>
        </View>
      ))}
    </ScrollView>
  );
}

export default Careers;
