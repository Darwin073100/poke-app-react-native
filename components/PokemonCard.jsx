import { Link } from 'expo-router';
import React, { useEffect, useRef } from 'react'
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export const PokemonCard = ({pokemon}) => {
  return (
    <Link href={`/${pokemon.id}`} asChild>
      <Pressable>
        <View key={pokemon.name} className="border border-white flex-row items-center justify-start gap-4 p-4 bg-blue-400 m-2 rounded-lg">
            <Image source={{uri: pokemon.image}} style={styles.image}/>
            <Text style={styles.name}>{pokemon.name}</Text>
        </View>
      </Pressable>
    </Link>
  )
}

export function AnimatedPokemonCard({pokemon, index}){
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(()=> {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay: index * 300,
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