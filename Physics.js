import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";
const Physics = (entities, { touches, time }) => {
    let engine = entities.physics.engine;

    touches
        .filter((t) => t.type === "press")
        .forEach((t) => {
            Matter.Body.setVelocity(
                entities.Square.body, {
                x: 0,
                y: 3,
            }
            );
            // engine.gravity.y = 1;
            // Matter.Body.applyForce(
            //   entities.Square.body,
            //   entities.Square.body.position,
            //   { x: 0.05, y: 0.05 } //F = ma
            // );
            // Matter.Body.setVelocity(entities.Square.body, {
            //   x: 0,
            //   y: 3,
            // });
            //Matter.Body.scale(entities.Square.body, 1.5, 1.5);
            //Matter.Body.rotate(entities.Square.body, Math.PI / 3);
            //Matter.Body.setAngularVelocity(entities.Square.body, Math.PI / 8);
            //Sleeping.set(entities.Square.body, false);
        });
    Matter.Engine.update(engine, time.delta);

    Matter.Events.on(engine, "collisionStart", (event) => {
        var pairs = event.pairs;

        var objALabel = pairs[0].bodyA.label;
        var objBXPos = pairs[0].bodyB.position.x;
        var objBYPos = pairs[0].bodyB.position.y;

        //Seems like object will get stuck in boundary if ApplyForce method is used to push it after first collision
        // So we use velocity then!
        if (objALabel === "Box" && objBXPos === Constants.WINDOW_WIDTH / 2 && objBYPos === Constants.WINDOW_HEIGHT) {
            //console.log('Hit bottom');
            Matter.Body.setVelocity(
                entities.Square.body, {
                x: 3,
                y: 0,
            }
            )
            
        }
        if (objALabel === 'Box' && objBXPos === Constants.WINDOW_WIDTH && objBYPos === Constants.WINDOW_HEIGHT / 2) {
            //console.log('Hit right');
            Matter.Body.setVelocity(
                entities.Square.body, {
                x: 0,
                y: -3,
            }
            )
        }
        if (objALabel === 'Box' && objBXPos === Constants.WINDOW_WIDTH / 2 && objBYPos === 0) {
            //console.log('Hit top');
            Matter.Body.setVelocity(
                entities.Square.body, {
                x: -3,
                y: 0,
            }
            )
        }
        if (objALabel === 'Box' && objBXPos === 0 / 2 && objBYPos === Constants.WINDOW_HEIGHT / 2) {
            //console.log('Hit left, Game Over');
        }


        // Gravity fun
        // if (objALabel === "Box" && objBXPos === Constants.WINDOW_WIDTH / 2 && objBYPos === Constants.WINDOW_HEIGHT) {
        //     engine.gravity.x = 1;
        //     engine.gravity.y = 0;
        // }
        // if (objALabel === 'Box' && objBXPos === Constants.WINDOW_WIDTH && objBYPos === Constants.WINDOW_HEIGHT / 2) {
        //     engine.gravity.x = 0;
        //     engine.gravity.y = -1;
        // } 
        // if (objALabel === 'Box' && objBXPos === Constants.WINDOW_WIDTH / 2 && objBYPos === 0) {
        //     engine.gravity.x = -1;
        //     engine.gravity.y = 0;
        // }
        // if (objALabel === 'Box' && objBXPos === 0 / 2 && objBYPos === Constants.WINDOW_HEIGHT / 2) {
        //     engine.gravity.x = 0;
        //     engine.gravity.y = 1;
        // }
    });

    return entities;
};

export default Physics;
