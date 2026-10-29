import { Link, Stack } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function About() {
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
            <ScrollView>
                <Text className="font-bold text-2xl ml-4 text-white">Sobre el proyecto</Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
                <Text className="p-4 text-white border border-white bg-blue-800 m-2 rounded-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta, veniam ducimus suscipit et explicabo rem cumque 
                    molestiae fugit tempore libero alias dolorum possimus error adipisci eos voluptates architecto totam!
                </Text>
            </ScrollView>
        </Screen>
    );
}