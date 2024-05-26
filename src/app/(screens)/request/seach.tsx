import { StyleSheet, Text, View } from "react-native";

export default function seach() {
    return (
        <View style={StyleSheet.container}>
            <Text> seach page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});