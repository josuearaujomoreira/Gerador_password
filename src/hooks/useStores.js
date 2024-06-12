import AsyncStorage from "@react-native-async-storage/async-storage";

//Função main para controlar armazenamento store
const useStorage = () => {

    //Buscar Itens Salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];

        } catch (error) {
            console.log('Erro ao buscar: ', error)
            return [];
        }
    }

    //Salvar Itens no Storage
    const salveItem = async (key, value) => {
        try {

            //Buscando as senhas já salvas
            let passwords = await getItem(key);

            //Adcionando nova senha
            passwords.push(value);

            //Salvando (como só salvar em texto no storage então usando o stringify para convert em texto)
            await AsyncStorage.setItem(key, JSON.stringify(passwords))

        } catch (error) {
            console.log('Erro ao salvar item: ', error)
            return [];
        }
    }

    //Remover Itens do Storage
    const removeItem = async (key, item) => {
        try {
            //Buscando as senhas já salvas
            let passwords = await getItem(key);

            //retornando todas as senhas exceto a selecionada para deletar
            let myPasswords = passwords.filter((password) => {
                return (password !== item)
            })

            //Salvando no store array atualizado
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

            return myPasswords;

        } catch (error) {
            console.log('Erro ao deletar item: ', error)
            return [];
        }
    }

    return {
        getItem,
        salveItem,
        removeItem
    }
}

export default useStorage;