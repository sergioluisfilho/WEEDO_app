import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.411}
      height={24}
      viewBox="0 0 23.411 24"
      {...props}
    >
      <G fill="#303030" data-name="Group 1">
        <Path
          data-name="Path 1"
          d="M22.713 4.077A2.993 2.993 0 0020.41 3H4.242L4.2 2.649A3 3 0 001.222 0H1a1 1 0 000 2h.222a1 1 0 01.993.883l1.376 11.7A5 5 0 008.557 19H19a1 1 0 000-2H8.557a3 3 0 01-2.82-2h11.92a5 5 0 004.921-4.113l.785-4.354a2.994 2.994 0 00-.65-2.456zM21.4 6.178l-.786 4.354A3 3 0 0117.657 13H5.419l-.941-8H20.41a1 1 0 01.99 1.178z"
        />
        <Circle
          data-name="Ellipse 1"
          cx={2}
          cy={2}
          r={2}
          transform="translate(5 20)"
        />
        <Circle
          data-name="Ellipse 2"
          cx={2}
          cy={2}
          r={2}
          transform="translate(15 20)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
