import Matter from "matter-js";
import React from "react";
import { Dimensions, View } from "react-native";

const Circle = (props) => {
    
    const width = props.radius * 2;

    const x = props.body.position.x - width / 2;
    const y = props.body.position.y - width / 2;

    return (
        <View
            style={{
                left: x,
                top: y,
                width: width,
                height: width,
                borderRadius: props.radius,
                backgroundColor: props.color,
                position: "absolute",
                borderColor: 'white',
                borderStyle: 'solid',
                borderWidth: 2,
            }}
        ></View>
    )


}
export default (world, color, pos, radius, extraOptions) => {
    const theCircle = Matter.Bodies.circle(pos.x, pos.y, radius, {
      label: extraOptions.label,
      isStatic: extraOptions.isStatic
    });
    Matter.World.add(world, theCircle);
    return { body: theCircle, color, radius, renderer: <Circle /> };
  };