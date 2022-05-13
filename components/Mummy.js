import Matter from "matter-js";
import React, { useState } from "react";
import { Dimensions, View, TouchableWithoutFeedback } from "react-native";
import SpriteSheet from "rn-sprite-sheet";
const Monster = (props) => {
    let monster = null;
    const width = props.body.bounds.max.x - props.body.bounds.min.x;
    const height = props.body.bounds.max.y - props.body.bounds.min.y;
    const xPos = props.body.position.x - width / 2;
    const yPos = props.body.position.y - height / 2;
    let startAnimate = (type) => {
        monster.play({
            type: type,
            fps: 24,
            loop: false,
            onFinish: () => {
                console.log('done');
            },
        });
    };


    return (
        <View
            style={{
                //borderWidth: 4,
                borderStyle: "solid",
                position: "absolute",
                left: xPos,
                top: yPos,
                width: width,
                height: height,
            }}
        >
            <SpriteSheet
                ref={(ref) => (monster = ref)}
                source={require("../assets/monster.png")}
                columns={4}
                rows={4}
                height={height} // set either, none, but not both
                //width={width}
                imageStyle={{ marginTop: 0 }}
                animations={{
                    walk: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    // appear: Array.from({ length: 15 }, (v, i) => i + 18),
                    // die: Array.from({ length: 21 }, (v, i) => i + 33),
                }}
            />
            <TouchableWithoutFeedback
                onPress={() => startAnimate("walk")}
                style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
            >
                <View
                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                />
            </TouchableWithoutFeedback>
        </View>
    );
};
export default (world, color, pos, size) => {
    const theMonster = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { label: "Monster", restitution: 0, frictionAir: 0, isStatic: false }
    );
    Matter.World.add(world, theMonster);
    return { body: theMonster, color, pos, renderer: <Monster /> };
};