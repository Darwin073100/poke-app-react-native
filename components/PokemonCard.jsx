import React, { useEffect, useRef } from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'

export const PokemonCard = ({pokemon}) => {
  return (
    <View key={pokemon.name} style={styles.card}>
        <Image source={{uri: pokemon.image}} style={styles.image}/>
        <Text style={styles.name}>{pokemon.name}</Text>
    </View>
  )
}

export function AnimatedPokemonCard({pokemon, index}){
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(()=> {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{opacity}}>
      <PokemonCard pokemon={pokemon}/>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  name:{
    color: 'white',
    fontSize: 20
  },
  card:{

  },
  image:{
    backgroundColor: '#fff',
    width:100,
    height: 100,
    borderRadius: 10,
  },
  view:{
    // paddingTop: insets.
  }
});