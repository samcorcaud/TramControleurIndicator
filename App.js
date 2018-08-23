import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Src/Components/Login';
import Map from "./Src/Components/Map";


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentPage: "Login"}; // et

        this.showMap = this.showMap.bind(this);//
        this.showLogin = this.showLogin.bind(this);
    }

    showMap(){
        this.setState({
            currentPage: "Map"
        })
    }

    showLogin(){
        this.setState({
            currentPage: "Login"
        })
    }

    render() {
        console.log(this.state)
        if(this.state.currentPage === "Login"){
            return (
                <View style={styles.container}> <Login showMap={this.showMap}/> </View>
            );
        } else if(this.state.currentPage === "Map"){
            return (
                <View style={styles.container}> <Map showLogin={this.showLogin}/></View> // showlogin sert  a ce qu'on puisse continuer à cliquer dessus
            );
        }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      width: "100%",
  },
});
