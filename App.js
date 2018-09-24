import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Src/Components/Login';
import Map from "./Src/Components/Map";
import SignIn from "./Src/Components/SignIn";


export default class App extends React.Component {
     constructor(props){
         super(props);
         this.state = {currentPage: "Login"}; // et

         this.showLogin = this.showLogin.bind(this);
         this.showSignIn = this.showSignIn.bind(this);
         this.showMap = this.showMap.bind(this);
     }


     showLogin(){
         this.setState({
             currentPage: "Login"
         })
     }

     showSignIn(){
         this.setState({
             currentPage: "Sign In"
         })
     }

    showMap(){
        this.setState({
            currentPage: "ShowMap"
        })
    }

    render() {
         console.log(this.state)
         if(this.state.currentPage === "Login"){
             return (
                <View style={styles.container}>
                    <Login showSignIn={this.showSignIn} showMap={this.showMap}/>
                </View>
            );
         } else if(this.state.currentPage === "Sign In"){
             return (
                 <View style={styles.container}>
                     <SignIn showLogin={this.showLogin} showMap={this.showMap}/>
                 </View>
             );
         } else if(this.state.currentPage === "ShowMap"){
                 return (
                 <View style={styles.container}>
                     <Map showLogin={this.showLogin} showSignIn={this.showSignIn}/>
                </View>
             );
         }





}}
//showlogin sert  a ce qu'on puisse continuer à cliquer dessus
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
      width: "100%",
  },
});
