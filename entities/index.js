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
    Square: Box(
      world,
      "green",
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 4 },
      { width: 40, height: 40 },
      { isStatic: false, label: 'Player' }
    ),

    Food: Box(
      world,
      'magenta',
      {x: Math.random() * ((Constants.WINDOW_WIDTH - 25) - 25) + 25, y: Math.random() * ((Constants.WINDOW_HEIGHT / 2 - 15) - 15) + 15}, // Spawn within playable area
      {width: 20, height: 20},
      {isStatic: true, label: 'Food'}
    ),

    BottomBoundary: Boundary(
      world,
      "red",
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT },
      { height: 30, width: Constants.WINDOW_WIDTH }
    ),

    TopBoundary: Boundary(
      world,
      'red',
      { x: Constants.WINDOW_WIDTH / 2, y: 0 },
      { height: 30, width: Constants.WINDOW_WIDTH }
    ),

    LeftBoundary: Boundary(
      world,
      'red',
      { x: 0, y: Constants.WINDOW_HEIGHT / 2 },
      { height: Constants.WINDOW_HEIGHT, width: 30 }
    ),

    RightBoundary: Boundary(
      world,
      'red',
      { x: Constants.WINDOW_WIDTH, y: Constants.WINDOW_HEIGHT / 2 },
      { height: Constants.WINDOW_HEIGHT, width: 30 }
    ),

    CenterBoundary: Boundary(
      world,
      'red',
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 2 },
      { height: 20, width: Constants.WINDOW_WIDTH }
    )
  };
};
