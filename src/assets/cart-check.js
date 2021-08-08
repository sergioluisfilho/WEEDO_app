import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function cartCheck(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.978}
      height={24}
      viewBox="0 0 23.978 24"
      {...props}
    >
      <Circle
        data-name="Ellipse 8"
        cx={2}
        cy={2}
        r={2}
        transform="translate(5 20)"
        fill="#303030"
      />
      <Circle
        data-name="Ellipse 9"
        cx={2}
        cy={2}
        r={2}
        transform="translate(15 20)"
        fill="#303030"
      />
      <Path
        data-name="Path 6"
        d="M23.685 1.336a1 1 0 00-1.414 0L17.112 6.5l-1.551-1.619a1 1 0 00-1.442 1.386l1.614 1.679a1.872 1.872 0 001.345.6h.033a1.873 1.873 0 001.335-.553l5.239-5.243a1 1 0 000-1.414z"
        fill="#303030"
      />
      <Path
        data-name="Path 7"
        d="M21.9 9.016a1 1 0 00-1.162.807l-.128.709A3 3 0 0117.657 13H5.418l-.94-8H11a1 1 0 000-2H4.242L4.2 2.648A3 3 0 001.222 0H1a1 1 0 000 2h.222a1 1 0 01.993.883l1.376 11.7A5 5 0 008.557 19H19a1 1 0 000-2H8.557a3 3 0 01-2.829-2h11.929a5 5 0 004.921-4.113l.128-.71a1 1 0 00-.806-1.161z"
        fill="#303030"
      />
    </Svg>
  )
}

export default cartCheck