import { TextInput, View, StyleSheet } from "react-native";

function Input({ holder, styles, setValue, value, keyboardType}){
     return(
        <TextInput
            placeholder={holder}
            style= {styles}
            onChangeText = {setValue}
            value = {value}
            keyboardType = {keyboardType}


        />
    )
}

export default Input

