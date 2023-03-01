import { useState } from "react";
import { View, StyleSheet , Text} from "react-native";
import Input from "../components/auth/Input";
import { Colours } from "../constant/Colours";
import Button from "../components/UI/Button";
function SignupScreen({navigation}){

    const [email, setEmail] = useState('')
    const [emailConfirm, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setConfirmPassword] = useState('')

    function signupHandler(){
        navigation.navigate("Signup")
        console.log('working')
    }

    function loginHandler(){
        navigation.goBack()
    }

    return (
        <View style = {styles.container}>

            <Text style = {styles.textHeader}>Register Your Account</Text>

            <View style = {styles.inputContainer}>
                <Input
                    holder = {"Username..."}
                    styles = {styles.input}
                    setValue = {setEmail}
                    value = {email}
                    keyboardType = 'ascii-capable'
                />
                <Input
                    holder = {"Email..."}
                    styles = {styles.input}
                    setValue = {setEmail}
                    value = {email}
                    keyboardType = 'email-address'
                />
                <Input
                    holder = {"Confirm Email..."}
                    styles = {styles.input}
                    setValue = {setConfirmEmail}
                    value = {emailConfirm}
                    keyboardType = 'email-address'
                />
                <Input
                    holder = {"Password..."}
                    styles = {styles.input}
                    setValue = {setPassword}
                    value = {password}
                    keyboardType = 'visible-password'
                />
                <Input
                    holder = {"Confirm Password..."}
                    styles = {styles.input}
                    setValue = {setConfirmPassword}
                    value = {passwordConfirm}
                    keyboardType = 'visible-password'
                />
            </View>
            <View style = {styles.buttonContainer}>
                <Button
                    onPress={signupHandler}
                >
                    Register
                </Button>
                
            </View>

            <View  style = {styles.signInContainer}>
                <Text style = {styles.text}>Already have an account?</Text>
                <Text 
                    style = {styles.textSignIn}
                    onPress = {loginHandler}
                >
                    Sign In
                </Text>
            </View>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex  : 1,
        
    },

    inputContainer: {
        alignItems : 'center', 
        
        //android
        elevation : 10
        
        
    },

    buttonContainer: {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 50,
        justifyContent : "space-evenly" 
        
        
    },

    signInContainer: {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 50,
        justifyContent : "center",
     
        
        
    },

    textHeader : {
        fontSize : 24,
        marginVertical : 40,
        marginHorizontal : 70
    },

    input: {
        height: 40,
        width : '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius : 10,
        backgroundColor :  Colours.white,
        
        
      },

      text : {
        fontSize : 16,
      },
      textSignIn : {
        marginLeft : 5,
        fontSize : 16,
        color : Colours.buttonColour
      
    },
  });