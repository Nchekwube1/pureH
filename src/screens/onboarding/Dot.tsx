import React, {FC} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import globalStyles from '../../styles/globasStyles';
import pallete from '../../constants/pallete';
interface dotInterface {
  index: number;
  currentIndex: SharedValue<number>;
}
const Dot: FC<dotInterface> = ({currentIndex, index}) => {
  const dotStyle = useAnimatedStyle(() => {
    const isActive = currentIndex.value === index;
    return {
      backgroundColor: withTiming(
        isActive ? pallete.primary : pallete.lightGray,
        {
          duration: 150,
        },
      ),
      width: withTiming(isActive ? 30 : 12),
    };
  });
  return (
    <Animated.View
      key={`${index}`}
      style={[globalStyles.onBoardingIndicator, globalStyles.mr1, dotStyle]}
    />
  );
};

export default Dot;
