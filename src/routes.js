import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from './pages/home/index.js'
import { Passwords } from './pages/passwords'
import { Cadastrar_Pass } from './pages/Cadastrar_Pass'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();


export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    /* tabBarShowLabel: false, */
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="home" />
                        }

                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
            />

            <Tab.Screen
                name="Minha Senhas"
                component={Passwords}
                options={{
                    headerShown: false,
                    /*   tabBarShowLabel: false, */
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="lock-closed" />
                        }

                        return <Ionicons size={size} color={color} name="lock-closed-outline" />
                    }
                }}
            />

            <Tab.Screen
                name="Cadastrar Senha"
                component={Cadastrar_Pass}
                options={{
                    headerShown: false,
                    /*  tabBarShowLabel: false, */
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="add-circle" />
                        }

                        return <Ionicons size={size} color={color} name="add-circle-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}