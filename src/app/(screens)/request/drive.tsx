import { StyleSheet, Text, View } from "react-native";

export default function drive() {
    return (
        <View style={StyleSheet.container}>
            <Text> drive page</Text>
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