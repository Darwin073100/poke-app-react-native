import { Link, Stack, useLocalSearchParams } from 'expo-router';
import {Image, Pressable, Text, View} from 'react-native';
import { HomeIcon } from '../components/Icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { Screen } from '../components/Screen';

export default function Detail(){
    const { id } = useLocalSearchParams();
    const [pokemon, setPokemon] = useState(null);
    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/ability/${id}`)
            .then(res => res.json())
            .then(data => setPokemon({
                ...data,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`   
            }))
    },[id]);
    return (
        <Screen>
            <Stack.Screen options={{
                headerLeft: () => null,
                headerRight: ()=>(
                    <Link href="/" asChild>
                        <Pressable className="rounded-lg p-4 flex-row items-center">
                            <HomeIcon color="white" />
                        </Pressable>
                    </Link>
                )
            }}/>
            <Text className="text-white text-2xl font-bold">Detalle del pokemon {id}</Text>
            <Image style={{ width: 150, height: 150 }} source={{uri: pokemon?.image}} className="bg-white rounded-full p-4 border-[4px] border-blue-300" />
            <View className="gap-2 bg-blue-300 m-4 p-4 rounded-md">
                <Text className="text-white font-bold text-2xl">{pokemon?.name}</Text>
                <Text className="text-white">
                    {pokemon ? pokemon?.effect_entries[1]?.effect?.toString(): null}
                </Text>
            </View>
        </Screen>
    );
}