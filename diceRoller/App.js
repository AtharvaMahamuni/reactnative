import React, {useState} from 'react';
import {
  Text, 
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'

const App = () => {

  const [diceImage, setDiceImage] = useState(DiceOne);

  const rollTap = () => {
    let randomNumber =  Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
    }

  }

  return(
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={diceImage}/>
        <TouchableOpacity onPress={rollTap}>
          <Text style={styles.rollButton}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 250,
    height: 250
  },
  rollButton: {
    fontSize: 20,
    marginTop: 30, 
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 2,
    fontWeight: 'bold'
  }
})