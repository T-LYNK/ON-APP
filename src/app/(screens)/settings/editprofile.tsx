import { StyleSheet, Text, View } from "react-native";

export default function category() {
    return (
        <View style={StyleSheet.container}>
            <Text> category page</Text>
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