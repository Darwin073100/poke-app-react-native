import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
      <ScrollView>
      {pokemons.map(item => (
        <View key={item.name} style={styles.card}>
          <Image source={{uri: item.image}} style={styles.image}/>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  );
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
