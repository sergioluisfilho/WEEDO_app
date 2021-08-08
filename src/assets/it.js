import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={33.848}
      height={38}
      viewBox="0 0 33.848 38"
      {...props}
    >
      <Path
        d="M16.924 0a17.186 17.186 0 0116.922 17.439 17.186 17.186 0 01-16.922 17.439q-.449 0-.893-.024v.024L6.702 38l1.143-5.844A17.556 17.556 0 01.002 17.439 17.186 17.186 0 0116.924 0zM15.44 15.437h-4.75v11.876h4.75zm6.955-6.531h-4.58v18.407h4.58v-8.181h2.545v-4.6h-2.545zm-6.955 0h-4.75v4.75h4.75z"
        fill="#4cc5d2"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default SvgComponent
