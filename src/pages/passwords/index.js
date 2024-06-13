import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useStorage from '../../hooks/useStores'
import { PasswordItem } from './components/passwordItem'


export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadPassword() {
            const Passwords = await getItem('@pass')
            console.log(Passwords)

            //passando para ver
            setListPasswords(Passwords)
        }

        loadPassword();
    }, [])


    async function handleDeletePassword(item) {
        console.log(item)
        const password = await removeItem("@pass", item)

        setListPasswords(password)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas Senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14, }}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => <PasswordItem data={item} RemovePassword={() => handleDeletePassword(item)} />}
                />
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
    },

    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,

    }

})