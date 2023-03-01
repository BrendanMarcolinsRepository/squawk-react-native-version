import { TextInput, View, StyleSheet, Image} from "react-native";
import { useState } from "react";
import Button from "../components/UI/Button";
import { Colours } from "../constant/Colours";
import Input from "../components/auth/Input";

function LoginScreen({navigation}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signupHandler(){
        navigation.navigate("Signup")
    }

    function loginHandler(){
        navigation.navigate("Homepage")
    }

     return(
        <View style = {styles.container}>

            <View style = {styles.imageContainer}>
                <Image
                    source = {require('../assets/logo/logo_1.png')}
                    style={styles.imageLogo}
                
                />
            </View>

            <View style = {styles.inputContainer}>
                <Input
                    holder = {"Email..."}
                    styles = {styles.input}
                    setValue = {setEmail}
                    value = {email}
                    keyboardType = 'email-address'
                />
             
                <Input
                    holder = {"Password..."}
                    styles = {styles.input}
                    setValue = {setPassword}
                    value = {password}
                    keyboardType = 'visible-password'

                    

                />
            </View>

            <View style = {styles.buttonContainer}>
                <Button 
                    onPress={loginHandler}
                >
                    Login
                </Button>
                <Button
                    onPress={signupHandler}
                >
                    Sign Up
                </Button>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex  : 1,
        
    },

    inputContainer: {
        alignItems : 'center', 
        
        //android
        elevation : 10
        
        
    },

    imageContainer: {
        marginHorizontal : "12%",
        marginTop : 50
        
        
    },

    buttonContainer: {
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : 50,
        justifyContent : "space-evenly" 
        
        
    },

    imageLogo: {
        width: 300,
        height: 300,
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
  });
  