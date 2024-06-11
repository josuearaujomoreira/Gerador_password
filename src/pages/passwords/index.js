import { View, Text, StyleSheet } from 'react-native';


export function Passwords() {
    return (
        <View style={styles.container_principal}>
            <Text>Minhas Senhas</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container_principal: {
        marginTop: 150
    }

})