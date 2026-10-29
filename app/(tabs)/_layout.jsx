import { Tabs } from "expo-router";
import { CircleInfoIcon, HomeIcon } from "../../components/Icons";

export default function TabsLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {backgroundColor: '#086288'},
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: '#fff',
            }}>
            <Tabs.Screen 
                name="index" 
                options={{
                    title: "Inicio",
                    tabBarIcon: ({color})=> <HomeIcon color={color} size={24}/>,
                }}/>
            <Tabs.Screen 
                name="about" 
                options={{
                    title: "Acerca de",
                    tabBarIcon: ({color})=> <CircleInfoIcon color={color} size={24}/>,
                    }}/>
        </Tabs>
    );
}