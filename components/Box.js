import { Dimensions, View } from "react-native";
import Matter from "matter-js";

const Box = (props) => {
    // const width = props.body.bounds.max.x - props.body.bounds.min.x;
    // const height = props.body.bounds.max.y - props.body.bounds.min.y;

    const width = props.size.width;
    const height = props.size.height;
    
    const xPos = props.body.position.x - width / 2;
    const yPos = props.body.position.y - height / 2;
    //console.log(props.size);
    let angle = props.body.angle + "deg";
    return (
        <View
            style={{
                width: width,
                height: height,
                left: xPos,
                top: yPos,
                backgroundColor: props.color,
                //transform: [{ rotate: angle }],
                position: "absolute",
            }}
        ></View>
    );
};

export default (world, color, pos, size, extraOptions) => {
    const theBox = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label: extraOptions.label,
            frictionAir: 0,
            angularVelocity: 0,
            restitution: 0,
            mass: 1,
            friction: 0,
            frictionStatic: 0,
            isStatic: extraOptions.isStatic,
        }
    );
    Matter.World.add(world, theBox);
    return { body: theBox, color, pos, size, renderer: <Box /> };
};

