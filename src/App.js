import React from 'react'
import { View } from 'react-native'

import CompPadrao, { Comp1, Comp2 } from './components/Mult'
import Primeiro from './components/Primeiro'

export default () => (
     <View>
         <CompPadrao />
         <Comp1/>
         <Comp2/>
         <Primeiro/>
     </View>
)



/*
componente funcional aron function redizida
export default  () =>  <Text>Primeiro Componente!!!</Text>
*/

