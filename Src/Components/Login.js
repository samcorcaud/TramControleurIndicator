import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Footer } from 'native-base';
import {firebase} from '../../App'

export default class Login extends React.Component {
    state = {log: "",Password: ""};

    render() {
        return (
            <Container>
                <Header/>
                <Content padder>
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
                        {/*<Button title={"Show Map"} onPress={this.props.showMap}/>
                        <Button title={"Sign In"} onPress={this.props.showSignIn}/>*/}
                        <TouchableOpacity onPress={this.props.showSignIn}>
                            <View style={styles.button}>
                                <Text>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => firebase.login(this.state.log, this.state.Password)}>
                            <View style={styles.button}>
                                <Text>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.showMap}>
                            <View style={styles.button}>
                                <Text>Map</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Content>
                <Footer/>
            </Container>
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
