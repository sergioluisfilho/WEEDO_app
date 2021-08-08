import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function mapMark(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.11}
      height={24.002}
      viewBox="0 0 20.11 24.002"
      {...props}
    >
      <G fill="#fff">
        <Path
          data-name="Path 8"
          d="M10.055 6.002a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z"
        />
        <Path
          data-name="Path 9"
          d="M10.055 24.002a5.271 5.271 0 01-4.311-2.2C1.933 16.545 0 12.593 0 10.055a10.055 10.055 0 1120.11 0c0 2.538-1.933 6.49-5.744 11.747a5.271 5.271 0 01-4.311 2.2zm0-21.819a7.883 7.883 0 00-7.874 7.874c0 2.01 1.893 5.727 5.329 10.466a3.145 3.145 0 005.09 0c3.436-4.739 5.329-8.456 5.329-10.466a7.883 7.883 0 00-7.874-7.874z"
        />
      </G>
    </Svg>
  )
}

export default mapMark