import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useMutation} from 'react-query';
import {getData} from '../api';
import {Loader} from '../components';
import {Colors, Typography} from '../styles';
import {setItem} from '../utils';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);

  const onLogin = async data => {
    try {
      if (email === '' || password === '') {
        ToastAndroid.show('Incorrect email or password!', ToastAndroid.SHORT);
      } else {
        await setItem('loginInfo', data).then(() => navigation.replace('Home'));
      }
    } catch {}
  };

  const mutation = useMutation(() => getData('login'), {
    onSuccess: async data => {
      setLoad(true);
      await onLogin(data).catch(() => {
        setLoad(false);
      });
    },
  });
  return (
    <Loader isLoading={load}>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor={Colors.semiTransparent}
            onChangeText={mail => setEmail(mail)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor={Colors.semiTransparent}
            secureTextEntry={true}
            onChangeText={pass => setPassword(pass)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => mutation?.mutate()}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </Loader>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: Colors.header2,
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignSelf: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    ...Typography?.normal14,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    ...Typography.normal13,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: Colors.header1,
  },
  loginText: {
    ...Typography.normal17WHITE,
  },
});
