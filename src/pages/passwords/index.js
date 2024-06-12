import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useStorage from '../../hooks/useStores'

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem } = useStorage();

    useEffect(() => {
        async function loadPassword() {
            const Passwords = await getItem('@pass')
            console.log(Passwords)
        }

        loadPassword();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#392DE9',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,

    },

    title: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }

})