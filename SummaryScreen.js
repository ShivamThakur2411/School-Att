import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SubmitHeader from './components/SubmitHeader';
import { createAppContainer, createSwitchNavigator } from
'react-navigation';
import HomeScreen from './HomeScreen';
import firebase from 'firebase';
import db from './config';

export default class SummaryScreen extends React.Component{

  constructor(){
    super();
    this.state = {
      present:'',
      absent:'',
    }
  }

  readData=()=>{
    var attendance = db.ref('Numbers');
    attendance.on("value",(data)=>{
      attendance = data.val();

      this.setState({
        present:attendance.studentsPresent,
        absent:attendance.studentsAbsent
      })
    })
  }

  componentDidMount=()=>{
    this.readData()
  }

  render(){
    return(
      <View style={styles.container}>
        <SubmitHeader/>

        <Text style={styles.numberText}>
          Number of Students present : {this.state.present}
        </Text>

        <Text style={styles.numberText}>
          Number of Students absent : {this.state.absent}
        </Text>

    <TouchableOpacity onPress={
      ()=>{
        this.props.navigation.navigate('HomeScreen')
      }}
        style={styles.button}
      >
      <Text>
          BACK
      </Text>
    </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignSelf:'center',
    },
    numberText:{
      marginTop:20,
     fontSize:20,
     fontWeight:'bold',
    },
    button:{
     width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    marginLeft: 16,
    backgroundColor:'yellow',
    alignSelf:'center',
    }
})