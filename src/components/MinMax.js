import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'


export default props => (
    <Text style={Estilo.textoGrande}>
         O valor {props.max} é mairo que o valor {props.min}!
    </Text>
)
   
