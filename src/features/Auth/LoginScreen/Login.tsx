import React from 'react';
import { View, Text, Button } from 'react-native';

import { useDispatch, useSelector} from 'react-redux'

export default function Login() {
    const state = useSelector((state) => state);
    console.log("@@@ Redux store =======>", state)
    const dispatch = useDispatch()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{state.name}</Text>
      <Button title='Update name' onPress={() => dispatch({type: 'UPDATE_NAME'})}/>
    </View>
  )
}