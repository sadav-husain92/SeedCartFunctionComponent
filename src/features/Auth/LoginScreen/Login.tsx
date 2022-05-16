/**
 LOGIN SCREEN
 */
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

interface Props {

}

const Login = (props: Props) => {
  const [username, setUserName] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const state: any = useSelector((state) => state);
  console.log("@@@ Redux store =======>", state)
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{state.name}</Text>
      <Button title='Update name' onPress={() => dispatch({ type: 'UPDATE_NAME' })} />
    </View>
  )
}

export default Login;