import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class Map extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Map</Text>
                <Button onPress={this.props.showLogin}>
                    <Text style={styles.text}>Show Login</Text>
                </Button>
                {/*<Button title={"SignIn"} onPress={this.props.showSignIn}/>*/}
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
