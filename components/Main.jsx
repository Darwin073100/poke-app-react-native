import "../global.css";
import { useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, ScrollView, ActivityIndicator, Text, Pressable} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedPokemonCard, PokemonCard } from './PokemonCard';
import { Link } from 'expo-router';
import { CircleInfoIcon } from "./Icons";

export function Main() {
  const [pokemons, setPokemons] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(()=> {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(resp => resp.json())
      .then(data => {
        const currentData = data?.results?.map((item)=> {
          const id = item.url.split('/pokemon/')[1].split('/')[0];
          return {
            ...item,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`
          }
        })
        setPokemons(currentData ?? [])
      })
  }, []);

  return (
    <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
      
      <Link href="/about" asChild>
        <Pressable className="mb-4 rounded-lg bg-white p-4 m-4 flex-row items-center gap-2">
          {({pressed})=> <><CircleInfoIcon style={{opacity: pressed ? 0.5 : 1}}/>
          <Text className="font-semibold text-black" style={{opacity: pressed ? 0.5 : 1}}>Ir al about</Text></>}
        </Pressable>
      </Link>
      
      {pokemons.length === 0 ?(
        <ActivityIndicator size="large" />
      ): (
        <FlatList
          data={pokemons}
          renderItem={({item, index}) => <AnimatedPokemonCard key={item.name} pokemon={item} index={index}/>}
          keyExtractor={(item) => item.name}
        />
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({

});
