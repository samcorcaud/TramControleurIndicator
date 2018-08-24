import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default class SignIn extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Sign in</Text>
                <Button title={"Show Login"} onPress={this.props.showLogin}/>
                <Button title={"Show Map"} onPress={this.props.showMap}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",

        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight:"bold",
    },

});
