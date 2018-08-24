import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default class Login extends React.Component {
    state = {log: "",Password: ""};


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <TextInput
                    style={{height: 40, width : 150, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(log) => this.setState({log})}
                    value={this.state.log}
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={{height: 40, width : 150, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(Password) => this.setState({Password})}
                    value={this.state.Password}
                    secureTextEntry={true}
                />
                <Button title={"Map"} onPress={this.props.showMap}>
                    <Text style={styles.text}>Show Map</Text>;
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
