import React, {useState} from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  View,
  Text
} from 'react-native';

import {RNCamera} from 'react-native-camera';

const pendingView = () => (
  <View
  style={{
    flex:1,
    fustifyContent: 'center',
    alignItems: 'center'
  }}
  >
    <Text style={{fontSize: 30, color: 'red'}}>Loading...</Text>
  </View>
)
const App = () => {
  const [image, setImage] = useState(null)

  const takePicture = async (camera) => {
    try {
      const options = {qualit: 0.9, base64: false}
      const data = await camera.takePictureAsync(options)
      setImage(data.uri)
    } catch (error) {
      console.warn(error)
    }
  }
  
  return(
    <>

    </>
  )
}


export default App;
