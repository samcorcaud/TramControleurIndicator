import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from 'react-native';



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
               {/* <Button title={"Login"} onPress={this.props.showLogin}/>
                <Button title={"Show Map"} onPress={this.props.showMap}/>*/}
                <TouchableOpacity onPress={this.props.showLogin}>
                    <View style={styles.button}>
                        <Text>Log in</Text>
                    </View>
                </TouchableOpacity>
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
    button : {
        //flex: 1,
        margin: 5,
        padding: 5,
        justifyContent: 'space-between',
        backgroundColor: '#2196F3',
        //borderBottomEndRadius : 10,
        //borderBottomLeftRadius: 10,
        //borderBottomRightRadius : 10,
        //borderBottomStartRadius : 10,
        borderRadius : 10,
        borderColor : 'black',
    },

});
