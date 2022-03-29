import World from "matter-js";
import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";
const Physics = (entities, { touches, time, dispatch, events }) => {
    let engine = entities.physics.engine;
    
    
    let world = engine.world;

    engine.gravity.y = 0.5;

    // const contraint = Matter.Constraint.create({
    //     bodyA: entities.CircleAnchorLeft.body,
    //     bodyB: entities.Circle8.body,
    //     length: 30
    // })

    const constraint = Matter.Constraint.create({
        bodyA: entities.CircleAnchorLeft.body,
         bodyB: entities.Circle8.body,
         length: 30
    })
    const constraint2 = Matter.Constraint.create({
        bodyA: entities.Circle8.body,
         bodyB: entities.Circle7.body,
         length: 30
    })
    const constraint3 = Matter.Constraint.create({
        bodyA: entities.Circle7.body,
         bodyB: entities.Circle6.body,
         length: 30
    })
    const constraint4 = Matter.Constraint.create({
        bodyA: entities.Circle6.body,
         bodyB: entities.Circle5.body,
         length: 30
    })
    const constraint5 = Matter.Constraint.create({
        bodyA: entities.Circle5.body,
         bodyB: entities.Circle4.body,
         length: 30
    })
    const constraint6 = Matter.Constraint.create({
        bodyA: entities.Circle4.body,
         bodyB: entities.Circle3.body,
         length: 30
    })
    const constraint7 = Matter.Constraint.create({
        bodyA: entities.Circle3.body,
         bodyB: entities.Circle2.body,
         length: 30
    })
    const constraint8 = Matter.Constraint.create({
        bodyA: entities.Circle2.body,
         bodyB: entities.Circle1.body,
         length: 30
    })
    const constraint9 = Matter.Constraint.create({
        bodyA: entities.Circle1.body,
         bodyB: entities.CircleAnchorRight.body,
         length: 30
    })



    Matter.World.add(world, constraint);
    Matter.World.add(world, constraint2);
    Matter.World.add(world, constraint3);
    Matter.World.add(world, constraint4);
    Matter.World.add(world, constraint5);
    Matter.World.add(world, constraint6);
    Matter.World.add(world, constraint7);
    Matter.World.add(world, constraint8);
    Matter.World.add(world, constraint9);
    

    /*************TOUCH CONTROLS FOR PLAYER ****************/
    if (events.length) {
        for (let i = 0; i < events.length; i++) {
            if (events[i].type === "move-up") {
                Matter.Body.setVelocity(entities.Square.body, { x: 0, y: -2 });
            }
            if (events[i].type === "move-down") {
                Matter.Body.setVelocity(entities.Square.body, { x: 0, y: 2 });
            }
            if (events[i].type === "move-left") {
                Matter.Body.setVelocity(entities.Square.body, { x: -2, y: 0 });
            }
            if (events[i].type === "move-right") {
                Matter.Body.setVelocity(entities.Square.body, { x: 2, y: 0 });
            }
        }
    }

    /*************TOUCH CONTROLS DRAGGING IN THE SCREEN ****************/
    // let x = entities.Food.body.position.x;
    // let y = entities.Food.body.position.y;
    // touches
    //     .filter((t) => t.type === "move")
    //     .forEach((t) => {
    //         x += t.delta.pageX;
    //         y += t.delta.pageY;
    //         Matter.Body.setPosition(entities.Food.body, {
    //             x: x,
    //             y: y,
    //         });
    //     });

    touches
        .filter((t) => t.type === "press")
        .forEach((t) => {
            Matter.Body.setPosition(entities.Square.body, {x: Math.random() * ((Constants.WINDOW_WIDTH - 25) - 25) + 25, y: Math.random() * ((Constants.WINDOW_HEIGHT / 2 - 15) - 15) + 15})
        });

    Matter.Engine.update(engine, time.delta);

    Matter.Events.on(engine, "collisionStart", (event) => {
        let pairs = event.pairs;

        let objA = pairs[0].bodyA;
        let objB = pairs[0].bodyB;
        let objALabel = pairs[0].bodyA.label;
        let objBLabel = pairs[0].bodyB.label;

        
        if (objALabel === 'Player' && objBLabel === 'Boundary') {
            Matter.Body.setVelocity(
                entities.Square.body, {
                    x: 0,
                    y: 0,
                }
            )
            entities.Square.color = '#' + Math.floor(Math.random()*16777215).toString(16);
        }

        if (objALabel === 'Player' && objBLabel === 'Food') {
            Matter.Body.setVelocity(
                entities.Square.body, {
                    x: 0,
                    y: 0,
                }
            )
            Matter.Body.setPosition(entities.Food.body, {x: Math.random() * ((Constants.WINDOW_WIDTH - 25) - 25) + 25, y: Math.random() * ((Constants.WINDOW_HEIGHT / 2 - 15) - 15) + 15})
        }
        

        /******************* Collision detection with boundaries *********************/
        // var objALabel = pairs[0].bodyA.label;
        // var objBXPos = pairs[0].bodyB.position.x;
        // var objBYPos = pairs[0].bodyB.position.y;

        //Seems like object will get stuck in boundary if ApplyForce method is used to push it after first collision
        // So we use velocity then!
        // if (objALabel === "Box" && objBXPos === Constants.WINDOW_WIDTH / 2 && objBYPos === Constants.WINDOW_HEIGHT) {
        //     //console.log('Hit bottom');
        //     Matter.Body.setVelocity(
        //         entities.Square.body, {
        //         x: 3,
        //         y: 0,
        //     }
        //     )

        // }
        // if (objALabel === 'Box' && objBXPos === Constants.WINDOW_WIDTH && objBYPos === Constants.WINDOW_HEIGHT / 2) {
        //     //console.log('Hit right');
        //     Matter.Body.setVelocity(
        //         entities.Square.body, {
        //         x: 0,
        //         y: -3,
        //     }
        //     )
        // }
        // if (objALabel === 'Box' && objBXPos === Constants.WINDOW_WIDTH / 2 && objBYPos === 0) {
        //     //console.log('Hit top');
        //     Matter.Body.setVelocity(
        //         entities.Square.body, {
        //         x: -3,
        //         y: 0,
        //     }
        //     )
        // }
        // if (objALabel === 'Box' && objBXPos === 0 / 2 && objBYPos === Constants.WINDOW_HEIGHT / 2) {
        //     //console.log('Hit left, Game Over');
        // }


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
