import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,ScrollView ,KeyboardAvoidingView} from 'react-native';
import db from '../Config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
         emailId:'',
         password:'',
         isModalVisible:false,
         firstName:'',
         lastName:'',
         contact:'',
         address:'',
         age:'',
        confirmPassword:''
        }
    }


    UserLogin = (emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
            return Alert.alert("Successfully Login");
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    } 

  
        
    UserSignUp=(username,password,confirmPassword)=>{
       
        firebase.auth().createUserWithEmailAndPassword(username,password).then((response)=>{
            return Alert.alert("User Added");
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        });
        db.collection('users').add({
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            contact:this.state.contact,
            emailId:this.state.emailId,
            address:this.state.address,
            password:this.state.password,
            age:this.state.age
        })
    
    }

    ShowModal = ()=>{
        return(
            <Modal
             animationType = "fade"
             transparent = {true}
             visible = {this.state.isModalVisible}
            >
              <View style = {styles.modalContainer}>
               <ScrollView style = {{width:'100%'}}>
                <KeyboardAvoidingView style = {styles.keyboardAvoidingView}>

                <Text style = {styles.modalTitle}>Sign Up</Text>

                <TextInput
                 style = {styles.formTextInput}
                 placeholder = "First Name"
                 maxLength = {12}
                 onChangeText = {(text)=>{
                     this.setState({
                         firstName:text
                     })
                 }}
                />

<TextInput
                 style = {styles.formTextInput}
                 placeholder = "last Name"
                 maxLength = {12}
                 onChangeText = {(text)=>{
                     this.setState({
                         lastName:text
                     })
                 }}
                />

<TextInput
                 style = {styles.formTextInput}
                 placeholder = "Age"
                 
                 keyboardType = {"numeric"}
                 onChangeText = {(text)=>{
                     this.setState({
                         age:text
                     })
                 }}
                />

<TextInput
                 style = {styles.formTextInput}
                 placeholder = "Contact"
                 maxLength = {10}
                 keyboardType = {'numeric'}
                 onChangeText = {(text)=>{
                     this.setState({
                         contact:text
                     })
                 }}
                />

<TextInput
                 style = {styles.formTextInput}
                 placeholder = "Address"
                 multiline = {true}
                 onChangeText = {(text)=>{
                     this.setState({
                         address:text
                     })
                 }}
                />

<TextInput
                 style = {styles.formTextInput}
                 placeholder = "Email Id"
                
                 
                 onChangeText = {(text)=>{
                     this.setState({
                         emailId:text
                     })
                 }}
                />

<TextInput
                 style = {styles.formTextInput}
                 placeholder = "Password"
               
                 onChangeText = {(text)=>{
                     this.setState({
                         passowrd:text
                     })
                 }}
                />

<TextInput
                 style = {styles.formTextInput}
                 placeholder = "Confirm Password"
               
                 onChangeText = {(text)=>{
                     this.setState({
                         confirmPassword:text
                     })
                 }}
                />
                <View style = {styles.modalBackButton}>
                   <TouchableOpacity
                    style = {styles.modalButton}
                    onPress = {()=>{
                        this.UserSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)

                    }}
                   >
                     <Text style = {styles.registerButtontext}>REGISTER</Text>
                   </TouchableOpacity>

                   <TouchableOpacity
                    style = {styles.modalButton}
                    onPress = {()=>{
                        this.setState({
                            isModalVisible:false
                        })

                    }}
                   >
                     <Text style = {styles.registerButtontext}>CANCEL</Text>
                   </TouchableOpacity>
                </View>

                </KeyboardAvoidingView>


               </ScrollView>

              </View>


            </Modal>
             
            
        )
    }
    render(){
        return(
            <View style = {styles.Container}>
                <View style = {{justifyContent:'center',alignItems:'center'}}>

                </View>
                {
                    this.ShowModal()
                }
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>Welcome to Punctual Lifestyle App!</Text>
                </View>
                <View style = {styles.loginContainer}>
                    <TextInput
                      placeholder = 'Email ID'
                      keyboardType = "email-address"
                      style = {styles.loginBox}
                      onChangeText = {(text)=>{
                          this.setState({
                              emailId:text
                          })
                      }}
                    />
                    <TextInput
                      placeholder = 'Password'
                      secureTextEntry = {true}
                      style = {styles.loginBox}
                      onChangeText = {(text)=>{
                          this.setState({
                              password:text
                          })
                      }}
                    />
                    <TouchableOpacity
                     style = {styles.button}
                     onPress = {()=>{
                         this.UserLogin(this.state.emailId,this.state.password);
                     }}
                    >
                        <Text style = {styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                     style = {styles.button}
                     onPress = {()=>{
                         this.setState({
                             isModalVisible:true
                         })
                     }}
                    >
                        <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    Container:{
        alignItems:'center',
        backgroundColor:'#D81B60',
        justifyContent:'center',
        flex:1,
        width:'100%',
        height:"100%"
    },
    header:{
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontSize:35,
        color:'white',
        marginTop:30
        
    },
    loginContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    loginBox:{
        width:300,
        height:40,
        marginTop:25,
        borderBottomColor:'white',
        borderBottomWidth:1.5,
        fontSize:15,
        alignSelf:'center',
        color:'white'

    },
    buttonText:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:15,
        color:'#D81B60'
    },
    button:{
        alignItems:'center',
        alignSelf:'center',
        marginTop:25,
        width:250,
        height:50,
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:15,
        borderColor:'white'
    },
    keyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalTitle:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#D81B60',
        margin:50
    },
    modalContainer:{
        flex:1,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'white',
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        marginBottom:80,

    },

    formTextInput:{
        width:'75%',
        height:35,
        marginTop:20,
        borderColor:'#D81B60',
        borderRadius:10,
        borderWidth:1,
        fontSize:15,
        alignSelf:'center',
        color:'#D81B60',
        padding:10
    },
    registerButtontext:{
        color:'#D81B60',
        fontSize:15,
        fontWeight:'bold'
    },
    modalButton:{
        alignItems:'center',
        alignSelf:'center',
        width:200,
        height:40,
        justifyContent:'center',
        borderRadius:10,
        borderWidth:1,
        marginTop:30,
        borderColor:'#D81B60'
    }

})