import Box from "../components/Box";
import { Dimensions } from "react-native";
import Boundary from "../components/Boundary";
import Matter from "matter-js";

import Constants from "../Constants";

export default (gameWorld) => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    engine.gravity.y = 0;

    return {
        physics: { engine, world },
        Square: Box(world, "green", { x: 100, y: 120 }, { width: 40, height: 40 }),

        BottomBoundary: Boundary(
            world,
            "red",
            { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT },
            { height: 90, width: Constants.WINDOW_WIDTH }
        ),

        TopBoundary: Boundary(
            world,
            'cyan',
            { x: Constants.WINDOW_WIDTH / 2, y: 0 },
            { height: 90, width: Constants.WINDOW_WIDTH }
        ),

        LeftBoundary: Boundary(
            world,
            'blue',
            { x: 0, y: Constants.WINDOW_HEIGHT / 2 },
            { height: Constants.WINDOW_HEIGHT, width: 90 }
        ),

        RightBoundary: Boundary(
            world,
            'yellow',
            { x: Constants.WINDOW_WIDTH, y: Constants.WINDOW_HEIGHT / 2 },
            { height: Constants.WINDOW_HEIGHT, width: 90 }
        ),

        CenterSquare: Boundary(
            world,
            'black',
            { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 2 },
            { height: 50, width: 50}
        )
    };
};
