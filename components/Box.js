import { Dimensions, View } from "react-native";
import Matter from "matter-js";

const Box = (props) => {
    const width = props.body.bounds.max.x - props.body.bounds.min.x;
    const height = props.body.bounds.max.y - props.body.bounds.min.y;

    const xPos = props.body.position.x - width / 2;
    const yPos = props.body.position.y - height / 2;

    let angle = props.body.angle + "deg";
    return (
        <View
            style={{
                width: width,
                height: height,
                left: xPos,
                top: yPos,
                backgroundColor: props.color,
                transform: [{ rotate: angle }],
                position: "absolute",
            }}
        ></View>
    );
};

export default (world, color, pos, size) => {
    const theBox = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { label: "Box", frictionAir: 0 }
    );
    Matter.World.add(world, theBox);
    return { body: theBox, color, pos, renderer: <Box /> };
};


// import { Dimensions } from "react-native";
// import Matter from "matter-js";
// import { View } from 'react-native';

// const Box = (props) => {


//     return (
//         <View style={{
//             width: props.size.width,
//             height: props.size.height,
//             left: props.pos.x,
//             top: props.pos.y,
//             backgroundColor: props.color,
//         }}>
//         </View>
//     )
// }

// export default (color, pos, size) => {
//     const theBox = Matter.Bodies.rectangle(pos.x, pos.y, size.width, size.height)
//     return { body: theBox, color, pos, size, renderer: <Box /> }
// };