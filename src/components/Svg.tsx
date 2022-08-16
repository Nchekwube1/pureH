import React from 'react';
import {SvgXml} from 'react-native-svg';

export type SvgProps = {
  icon: any;
  color?: any;
  fill?: any;
};

const Svg: React.FC<SvgProps> = ({icon, color, fill}) => {
  const SvgImage = () => (
    <SvgXml
      xml={icon}
      stroke={color ? color : undefined}
      color={'#292D32'}
      fill={fill}
      width="100%"
    />
  );
  return <SvgImage />;
};

export default Svg;
