import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import React, { useEffect, useState } from "react";
import Physics from "./Physics";

export default function App() {
  const [gameEngine, setGameEngine] = useState(null);
  return (
    <View style={styles.container}>
      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        style={styles.gameContainer}
      >
        <StatusBar hidden />
      </GameEngine>


      {/* Controls */}
      <View style={styles.controls}>
        <View style={styles.controlRow}>
          <TouchableOpacity onPress={() => {
            gameEngine.dispatch({ type: 'move-up'})
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.controlRow}>
          <TouchableOpacity onPress={() => {
            gameEngine.dispatch({ type: 'move-left'})
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Left</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            gameEngine.dispatch({ type: 'move-down'})
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Down</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            gameEngine.dispatch({ type: 'move-right'})
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Right</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.watermark}>Aleksei Bikov</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  controls: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 100,
    maxHeight: 150,
    width: 200,
  },  
  controlRow: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    width: 75,
    maxHeight: 75,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen'
  },
  buttonText: {
    color: 'red',
    
  },
  watermark: {
    marginBottom: 15,
    fontFamily: 'monospace'
  }

});

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { GameEngine } from 'react-native-game-engine';

// import entities from './entities';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <GameEngine
//         entities={entities()}
//         style={styles.gameContainer}>

//         <StatusBar style="auto" />
//       </GameEngine>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   gameContainer: {
//     position: "absolute",
//     left: 0,
//     top: 0,
//     right: 0,
//     bottom: 0,
//   }
// });