import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default class SignIn extends React.Component {

    state = {Username: "",Mail: "",Password: ""};

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Sign in</Text>
                    <Text style={styles.textSignIn}>Username</Text>
                    <TextInput
                    style={{height: 40, width : 150, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(Username) => this.setState({Username})}
                    value={this.state.Username}
                />
                    <Text style={styles.textSignIn}>Password</Text>
                    <TextInput
                    style={{height: 40, width : 150, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(Password) => this.setState({Password})}
                    value={this.state.Password}
                    secureTextEntry={true}
                />
                    <Text style={styles.textSignIn}>Mail</Text>
                    <TextInput
                    style={{height: 40, width : 150, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(Mail) => this.setState({Mail})}
                    value={this.state.Mail}
                />
                <Button title={"Login"} onPress={this.props.showLogin}/>
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
    textSignIn: {
        fontStyle:"italic",
    },

});
