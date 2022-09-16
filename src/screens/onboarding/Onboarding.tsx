import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import globalStyles, {height, width} from '../../styles/globasStyles';
import TextComponent from '../../components/text/TextComponent';
import onboarding1 from '../../assets/svgs/onboarding1';
import onboarding2 from '../../assets/svgs/onboarding2';
import onboarding3 from '../../assets/svgs/onboarding3';
import Svg from '../../components/Svg';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import pallete from '../../constants/pallete';
import ButtonComponent from '../../components/button/ButtonComponent';
import Dot from './Dot';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationProps} from '../../types/types';
const Onboarding = () => {
  interface dataProps {
    svgPath: string;
    title: string;
    desc: string;
  }
  const flatListRef = useAnimatedRef<ScrollView>();
  const {navigate} = useNavigation<AuthStackNavigationProps>();
  const translationX = useSharedValue(0);
  const onClick = () => {
    if (translationX.value !== data.length - 1) {
      flatListRef.current?.scrollTo({
        x: width * (translationX.value + 1),
      });
    } else {
      navigate('registerStack');
    }
  };
  const [btnText, setBtnText] = useState('Next');
  const currentIndex = useDerivedValue(() => {
    return translationX.value;
  }, [translationX.value]);
  const data: dataProps[] = [
    {
      svgPath: onboarding1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar consectetur amet. Lorem ipsum dolor sit amet,',
      title: 'Get the proper treatment you need anytime',
    },
    {
      svgPath: onboarding2,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar consectetur amet. Lorem ipsum dolor sit amet,',
      title: 'Receive consultation from the best doctors',
    },
    {
      svgPath: onboarding3,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar consectetur amet. Lorem ipsum dolor sit amet,',
      title: 'Quick and reliable ambulance service',
    },
  ];

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      let offset = Math.round(event.contentOffset.x / width);
      translationX.value = offset;
      if (offset === data.length - 1) {
        setBtnText('Sign Up');
      } else {
        setBtnText('Next');
      }
    },
  });

  return (
    <View
      style={[
        {
          backgroundColor: pallete.white,
          flex: 1,
        },
      ]}>
      <View
        style={{
          height: height * 0.75,
        }}>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          ref={flatListRef as any}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          {data.map((item, index) => (
            <View
              key={`${item}-${index}`}
              style={[
                globalStyles.py2,
                {
                  flex: 1,
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
                      height: '75%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  ]}>
                  <Svg icon={item.svgPath} />
                </View>
                <View
                  style={[
                    globalStyles.px1,
                    {
                      height: '25%',
                    },
                  ]}>
                  <TextComponent
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      textAlign: 'center',
                      fontSize: 20,
                    }}>
                    {item.title}
                  </TextComponent>
                  <TextComponent
                    style={[
                      globalStyles.mt1,
                      {
                        fontFamily: 'Montserrat-Regular',
                        textAlign: 'center',
                        fontSize: 15,
                      },
                    ]}>
                    {item.desc}
                  </TextComponent>
                </View>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>

      <View
        style={{
          width,
          backgroundColor: 'transparent',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width,
            justifyContent: 'center',
            marginTop: 25,
          }}>
          {data.map((_, index) => {
            return (
              <Dot
                key={index.toString()}
                currentIndex={currentIndex}
                index={index}
              />
            );
          })}
        </View>
        <Animated.View style={[globalStyles.px2, globalStyles.mt2]}>
          <ButtonComponent
            // title={translationX.value === data.length - 1 ? 'Sign Up' : 'Next'}
            title={btnText}
            // title={translationX.value.toString()}
            onPress={onClick}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;
