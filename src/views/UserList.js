import React from 'react'
import {Text, View, FlatList, Alert} from 'react-native'
import users from '../data/users'
import {Avatar, ListItem, Button, Icon} from 'react-native-elements'
import { getActionFromState } from '@react-navigation/core'



export default props => {
    /* console.warn(Object.keys(props)) */
    function getUserItem({item: user}) {

        function confirmUserDeletions(user){
            Alert.alert('Excluir Usuário','Deseja relamente excluir o usuário?', [ 
                {
                    text: 'Sim',
                    onPress() {
                        console.warn('Usuário '+ user.name + ' excluído!')
                    }
                },
                {
                    text: 'Não',
                    
                    
                }

            ])
        }
        	    return (
                    <ListItem
                        key={user.id}
                        bottomDivider                    
                        onPress={() => props.navigation.navigate('UserForm', user)}
                    >
                        <Avatar 
                            title={user.name}
                            source= {{uri: user.avatarUrl}}                      
                        />
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        </ListItem.Content>
                        <Button
                            onPress={() => props.navigation.navigate('UserForm', user)}
                            type="clear"
                            icon={<Icon name='edit' size={25} color='orange' />}
                        />
                        <Button
                            onPress={() => confirmUserDeletions(user)}
                            type="clear"
                            icon={<Icon name='delete' size={25} color='red' />}
                        />
                        <ListItem.Chevron/>
                    </ListItem>                    
                   
                )
    }

    return (
       <View>
           <FlatList 
           keyExtractor={users => users.id.toString()}
           data={users}
           renderItem={getUserItem}
           />
       </View>
    )
}