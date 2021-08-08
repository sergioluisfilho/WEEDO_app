import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.664}
      height={16}
      viewBox="0 0 18.664 16"
      {...props}
    >
      <Path
        d="M7.838 15.61a1.333 1.333 0 000-1.887l-4.389-4.39 13.882-.009a1.333 1.333 0 000-2.667l-13.885.009 4.392-4.389A1.334 1.334 0 005.953.393L1.172 5.172a4 4 0 000 5.657l4.781 4.781a1.333 1.333 0 001.885 0z"
        fill="#303030"
        data-name="Group 54"
      />
    </Svg>
  )
}

export default SvgComponent