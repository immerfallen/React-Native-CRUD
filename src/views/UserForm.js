import React from 'react'
import {Text} from 'react-native'

export default props => {
    console.warn(Object.keys(props.route.params))
    return (
        <Text>UserForm</Text>
    )
}