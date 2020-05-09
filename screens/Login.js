import React, { useState } from "react";

//Elements
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";

//Styles
import { AppStyles } from "../AppStyles";

export default function LoginScreen(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const login = () => {
    console.log("usao");
    console.log(Email);
    console.log(Password);
    setEmail("");
    setPassword("");
    props.navigation.replace({ routeName: "agenda" });
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Prijavi se</Text>
      <View style={styles.InputContainer}>
        <TextInput
          value={Email}
          onChangeText={(email) => setEmail(email)}
          style={styles.body}
          placeholder="E-mail or phone number"
          placeholderTextColor={AppStyles.color.white}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer2}>
        <TextInput
          value={Password}
          onChangeText={(password) => setPassword(password)}
          style={styles.body}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={AppStyles.color.white}
          underlineColorAndroid="transparent"
        />
      </View>
      <Button
        containerStyle={styles.loginContainer}
        style={styles.loginText}
        title="Log in"
        buttonStyle={{
          backgroundColor: AppStyles.color.main,
        }}
        onPress={login}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppStyles.color.backgroundLogin,
  },
  or: {
    fontFamily: AppStyles.fontName.main,
    color: "black",
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.main,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
  },

  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: "red",
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    color: AppStyles.color.white,
  },
  InputContainer2: {
    width: AppStyles.textInputWidth.main,
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.white,
    color: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.white,
  },
});
