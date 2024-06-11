import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export function ModalPassword({ password, handleClose }) {

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password)
        alert('Senha Copiado com Sucesso!')

        //Depois de copiar fechar modal
        handleClose()
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada!</Text>
                <Text style={styles.Subtitle}>Aperte e segure e cima da senha para copiar</Text>
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.textpass}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.button_salve]}>
                        <Text style={styles.buttonText_Save} >Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "rgba(24, 24, 24, 0.3)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 8
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 24
    },

    innerPassword: {
        backgroundColor: '#0e0e0e',
        with: '90%',
        padding: 14,
        borderRadius: 8
    },

    textpass: {
        color: '#FFF',
        textAlign: 'center'
    },
    Subtitle: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 14
    },

    buttonArea: {
        flexDirection: "row",
        width: '90%',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'space-between', //Cada um pro seu lado
    },

    button: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 14,
        marginTop: 14,
        padding: 8
    },
    button_salve: {
        backgroundColor: "#392DE9",
        borderRadius: 8
    },

    buttonText_Save: {
        color: "#FFF",
        fontWeight: 'bold'
    }


})