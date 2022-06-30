import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView, 
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBLE: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}

const App = () => {

  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    if(!inputValue) {
      Snackbar.show({
        text: 'Please Enter the Value',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#ea7773',
        textColor: '#fff'
      });
    } else {
      let result = parseFloat(inputValue) * currencyPerRupee[currency];
      setResultValue(result.toFixed(2))
    }
  }

  return(
    <>
      <ScrollView 
        keyboardDismissMode='interactive' 
        contentInsetAdjustmentBehavior='automatic'
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholder='Enter the Value'
            placeholderTextColor='#c1c1c1'
            value={inputValue}
            onChangeText={(inputValue) => {setInputValue(inputValue)}}
            ></TextInput>
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map((currency) => (
              <TouchableOpacity
                key={currency}
                style={styles.converterButton}
                onPress={() => {buttonPressed(currency)}}
              >
                <Text style={styles.converterButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c'
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center'
  },
  resultValue: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center'
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: "30%",
    borderWidth: 2,
    borderColor: '#bbe1fa',
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: '#0f4c75'
  },
  converterButtonText: {
    color: '#fff',
    fontSize: 15
  }
})