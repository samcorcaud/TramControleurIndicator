import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class Map extends React.Component {

    state  = {Map: ""};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Map</Text>
                <Button title={"Login"} onPress={this.props.showLogin}/>

                <Button title={"SignIn"} onPress={this.props.showSignIn}/>
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
