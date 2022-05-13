import Box from "../components/Box";
import { Dimensions } from "react-native";
import Boundary from "../components/Boundary";
import Matter from "matter-js";

import Constants from "../Constants";
import Circle from "../components/Circle";

import { circle } from "react-native/Libraries/Animated/Easing";
import Mummy from "../components/Mummy";
import Candle from "../components/Candle"

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;







  return {
    physics: { engine, world },
    // Square: Box(
    //   world,
    //   "green",
    //   { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 4 },
    //   { width: 40, height: 40 },
    //   { isStatic: false, label: 'Player' }
    // ),

    Monster: Mummy(
      world,
      'green',
      { x: Constants.WINDOW_WIDTH / 8, y: Constants.WINDOW_HEIGHT - 45 },
      { width: 50, height: 50 }
    ),

    CandleLeft: Candle(
      world,
      'green',
      { x: Constants.WINDOW_WIDTH / 8, y: Constants.WINDOW_HEIGHT - 45 },
      { width: 40, height: 60 }
    ),
    CandleRight: Candle(
      world,
      'green',
      { x: Constants.WINDOW_WIDTH - 45, y: Constants.WINDOW_HEIGHT - 45 },
      { width: 40, height: 60 }
    ),
    //Bridge Start 
    // CircleAnchorLeft: Circle(
    //   world,
    //   "blue",
    //   { x: Constants.WINDOW_WIDTH / 10, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'AnchorLeft', isStatic: true }
    // ),
    // CircleAnchorRight: Circle(
    //   world,
    //   "blue",
    //   { x: Constants.WINDOW_WIDTH / 1.115, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'AnchorRight', isStatic: true }
    // ),



    // Circle1: Circle(
    //   world,
    //   "cyan",
    //   { x: Constants.WINDOW_WIDTH / 1.25, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'CircleBridge', isStatic: false }
    // ),
    // Circle2: Circle(
    //   world,
    //   "cyan",
    //   { x: Constants.WINDOW_WIDTH / 1.45, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'CircleBridge', isStatic: false }
    // ),
    // Circle3: Circle(
    //   world,
    //   "red",
    //   { x: Constants.WINDOW_WIDTH / 1.7, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'CircleBridge', isStatic: false }
    // ),
    // Circle4: Circle(
    //   world,
    //   "red",
    //   { x: Constants.WINDOW_WIDTH / 2.05, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'CircleBridge', isStatic: false }
    // ),
    // Circle5: Circle(
    //   world,
    //   "red",
    //   { x: Constants.WINDOW_WIDTH / 2.6, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'CircleBridge', isStatic: false }
    // ),
    // Circle6: Circle(
    //   world,
    //   "red",
    //   { x: Constants.WINDOW_WIDTH / 3.5, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'CircleBridge', isStatic: false }
    // ),
    // Circle7: Circle(
    //   world,
    //   "red",
    //   { x: Constants.WINDOW_WIDTH / 5, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'CircleBridge', isStatic: false }
    // ),
    // Circle8: Circle(
    //   world,
    //   "red",
    //   { x: Constants.WINDOW_WIDTH / 7, y: Constants.WINDOW_HEIGHT / 1.25 },
    //   15,
    //   { label: 'CircleBridge', isStatic: false }
    // ),


    //Bridge End

    // Food: Box(
    //   world,
    //   'magenta',
    //   { x: Math.random() * ((Constants.WINDOW_WIDTH - 25) - 25) + 25, y: Math.random() * ((Constants.WINDOW_HEIGHT / 2 - 15) - 15) + 15 }, // Spawn within playable area
    //   { width: 20, height: 20 },
    //   { isStatic: true, label: 'Food' }
    // ),

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

    // CenterBoundary: Boundary(
    //   world,
    //   'red',
    //   { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 2 },
    //   { height: 20, width: Constants.WINDOW_WIDTH }
    // )
  };
};
