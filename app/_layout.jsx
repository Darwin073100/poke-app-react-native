import "../global.css";
import { View, Text, Image, Pressable } from "react-native";
import { Link, Slot, Stack } from 'expo-router';
import { CircleInfoIcon } from "../components/Icons";
const logo = require('../assets/favicon.png');

export default function Layout(){
    return (
        <View className="flex-1">
            <Stack
                screenOptions={{
                    headerStyle: {backgroundColor: '#086288'},
                    headerTintColor: '#fff',
                    headerTitleStyle: {fontWeight: 'bold'},
                    headerLeft: () => <Image source={logo} style={{width: 30, height: 30 , marginRight: 10}} />,
                    headerRight: ()=> (     
                        <Link href="/about" asChild>
                            <Pressable className="p-4 rounded-lg flex-row items-center">
                            {({pressed})=><CircleInfoIcon style={{opacity: pressed ? 0.5 : 1}} color="white"/>}
                            </Pressable>
                        </Link>),
                    headerTitle: () => <Text className="text-white font-bold text-lg">PokeApp</Text>
                }}/>
        </View>
    );
}