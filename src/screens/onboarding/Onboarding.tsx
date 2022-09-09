import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles, {height, width} from '../../styles/globasStyles';
import TextComponent from '../../components/text/TextComponent';
import onboarding1 from '../../assets/svgs/onboarding1';
import onboarding2 from '../../assets/svgs/onboarding2';
import onboarding3 from '../../assets/svgs/onboarding3';
import colors from '../../constants/pallete';
import Svg from '../../components/Svg';
const Onboarding = () => {
  interface dataProps {
    svgPath: string;
    title: string;
    desc: string;
  }
  const data: dataProps[] = [
    {
      svgPath: onboarding1,
      desc: 'Get the proper treatment you need anytime',
      title: 'Get the proper treatment you need anytime',
    },
    {
      svgPath: onboarding2,
      desc: 'Receive consultation from the best doctors',
      title: 'Receive consultation from the best doctors',
    },
    {
      svgPath: onboarding3,
      desc: 'Quick and reliable ambulance service',
      title: 'Quick and reliable ambulance service',
    },
  ];
  const DOT_SIZE = 40;
  return (
    <View
      style={[
        {
          ...StyleSheet.absoluteFillObject,

          backgroundColor: colors.white,
        },
      ]}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({item, index}) => (
          <View
            style={[
              globalStyles.py2,
              {
                width: width,
                height: height * 0.7,
                // backgroundColor: 'red',
              },
            ]}>
            <View
              style={[
                globalStyles.px2,

                {
                  width,
                  height: '100%',
                },
              ]}>
              <View
                style={[
                  {
                    width: width - 40,
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Svg icon={item.svgPath} />
              </View>
              {/* <View style={[globalStyles.px1]}>
                <TextComponent
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    textAlign: 'center',
                    fontSize: 20,
                  }}>
                  {item.title}
                </TextComponent>
              </View> */}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Onboarding;
