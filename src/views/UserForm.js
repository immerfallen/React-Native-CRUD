import React, {useState} from 'react'
import {Text, View,TextInput, StyleSheet, Button} from 'react-native'


export default ({route,navigation}) => {
   
   const [ user, setUser] = useState(route.params ? route.params : {})
    return (
        <>
            <View 
            style={style.form}>
                <Text 
                style={style.label}>Nome</Text>
                <TextInput
                style={style.input}
                onChangeText={name=> setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
                />
                 <Text 
                style={style.label}>Email</Text>
                <TextInput
                style={style.input}
                onChangeText={email=> setUser({...user, email})}
                placeholder="Informe o e-mail"
                value={user.email}
                />
                 <Text 
                style={style.label}>URL</Text>
                <TextInput
                style={style.input}
                onChangeText={avatarUrl=> setUser({...user, avatarUrl})}
                placeholder="Informe a URL"
                value={user.avatarUrl}
                />
                <Button 
                title="Salvar"
                onPress= {() => {
                    navigation.goBack()
                }}
                 />
            </View>
            
           
               
           
         </>
        
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 15,
        
    }
})