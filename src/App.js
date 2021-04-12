import React from 'react'
import { View, StyleSheet } from 'react-native'

import CompPadrao, { Comp1, Comp2 } from './components/Mult'
import Primeiro from './components/Primeiro'
import MinMax from './components/MinMax'

export default () => (
     <View style={ style.App }>
         <MinMax min={3} max={20}/>
         
         {/*<CompPadrao />
         <Comp1/>
         <Comp2/>
         <Primeiro/>*/}
     </View>
)

const style =  StyleSheet .create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20    
    }
})


/*
componente funcional aron function redizida
export default  () =>  <Text>Primeiro Componente!!!</Text>
*/

