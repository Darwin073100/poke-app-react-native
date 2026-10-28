import "../global.css";
import { View, Text } from "react-native";
import { Slot } from 'expo-router';

export default function Layout(){
    return (
        <View className="flex-1 bg-blue-500 items-center justify-center">
            <Slot/>
        </View>
    );
}