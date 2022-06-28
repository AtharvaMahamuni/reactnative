import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
}  from 'react-native';

const App = () => {

  // const randomColor = 'rgb(32, 0, 126)'
  const [randomColor, setRandomColor] = useState('rgb(0, 0, 0)');

  const changeBG = () => {
    let color = 'rgb(' +
        Math.floor(Math.random() * 256) +
        ',' +
        Math.floor(Math.random() * 256) +
        ',' +
        Math.floor(Math.random() * 256) +
      ')'

    setRandomColor(color)
  }

  const resetBG = () => {
    setRandomColor('rgb(0, 0, 0)')
  }

  return(
    <>
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>tap me</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{marginTop: 15}} onPress={resetBG}>
          <Text style={styles.text}>reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase'
  }
})