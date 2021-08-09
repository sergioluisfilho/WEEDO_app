import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <Circle
        data-name="Elipse 4"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(3.333 13.333)"
        fill="#fff"
      />
      <Circle
        data-name="Elipse 5"
        cx={1.333}
        cy={1.333}
        r={1.333}
        transform="translate(10 13.333)"
        fill="#fff"
      />
      <Path
        data-name="Caminho 2"
        d="M15.334 2H14V.667a.667.667 0 10-1.333 0V2h-1.333a.667.667 0 100 1.333h1.333v1.334a.667.667 0 101.333 0V3.333h1.333a.667.667 0 000-1.333z"
        fill="#fff"
      />
      <Path
        data-name="Caminho 3"
        d="M14.514 6.484a.663.663 0 00-.775.537 2 2 0 01-1.968 1.645H3.612l-.627-5.333h5.682a.667.667 0 000-1.333H2.828L2.8 1.765A2 2 0 00.815 0H.667a.667.667 0 000 1.333h.148a.667.667 0 01.662.589l.917 7.8A3.333 3.333 0 005.7 12.667h6.962a.667.667 0 000-1.333H5.7A2 2 0 013.819 10h7.953a3.333 3.333 0 003.281-2.742.667.667 0 00-.539-.774z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
