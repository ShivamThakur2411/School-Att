import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from './components/AppHeader';
import firebase from 'firebase';
import db from './config';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      studentsPresent: 0,
      studentsAbsent: 0,
    };
  }

  increasePresent = (present1) => {
    var presentStu = db.ref('/Numbers' + '/');
    presentStu.update({
      studentsPresent: present1,
    });
  };

  increaseAbsent = (absent1) => {
    var absentStu = db.ref('/Numbers' + '/');
    absentStu.update({
      studentsAbsent: absent1,
    });
  };

  studentUpdate = (name, status) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    var status1 = db.ref([today] + '/');
    status1.update({
      [name]: status,
    });
  };

  reset = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    var resetDatabase = db.ref('/').set({
      [today]: {
        'Nischay Malhan': '',
        'Gaurav Chaudary': '',
        'Amit Bhadana': '',
        'Ujjwal Chaurasia': '',
        'Mithilesh Patankar':'',
      },
      Numbers: {
        studentsPresent: 0,
        studentsAbsent: 0,
      },
    });
  };
  goToSummary = () => {
    this.props.navigation.navigate('SummaryScreen',{
      studentsPresent:this.state.studentsPresent
    });
  };

  render() {
    return (
      <View>
        <AppHeader />

  <View style={{ flexDirection: 'row', marginTop: 20 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 19 }}>
            Nischay Malhan
    </Text>

    <TouchableOpacity style={styles.presentButton}
          onPress={() => {
    this.studentUpdate('Nischay Malhan', 'Present');
        this.setState({
        studentsPresent: this.state.studentsPresent + 1,
        });

  this.increasePresent(this.state.studentsPresent);
  }}>
    <Text style={{ fontWeight: 'bold' }}>PRESENT</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.presentButton}
      onPress={() => {
        this.studentUpdate('Nischay Malhan', 'Absent');
            this.setState({
      studentsAbsent: this.state.studentsAbsent + 1,
          });
              
    this.increaseAbsent(this.state.studentsAbsent);
      }}>
    <Text style={{ fontWeight: 'bold' }}>ABSENT</Text>
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', marginTop: 20 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 19 }}>
            Ujjwal Chaurasia
    </Text>

    <TouchableOpacity style={styles.presentButton}
          onPress={() => {
    this.studentUpdate('Ujjwal Chaurasia', 'Present');
        this.setState({
        studentsPresent: this.state.studentsPresent + 1,
        });

  this.increasePresent(this.state.studentsPresent);
  }}>
    <Text style={{ fontWeight: 'bold' }}>PRESENT</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.presentButton}
      onPress={() => {
        this.studentUpdate('Ujjwal Chaurasia', 'Absent');
            this.setState({
      studentsAbsent: this.state.studentsAbsent + 1,
          });
              
    this.increaseAbsent(this.state.studentsAbsent);
      }}>
    <Text style={{ fontWeight: 'bold' }}>ABSENT</Text>
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', marginTop: 20 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 19 }}>
            Mithilesh Patankar
    </Text>

    <TouchableOpacity style={styles.presentButton}
          onPress={() => {
    this.studentUpdate('Mithilesh Patankar', 'Present');
        this.setState({
        studentsPresent: this.state.studentsPresent + 1,
        });

  this.increasePresent(this.state.studentsPresent);
  }}>
    <Text style={{ fontWeight: 'bold' }}>PRESENT</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.presentButton}
      onPress={() => {
        this.studentUpdate('Mithilesh Patankar', 'Absent');
            this.setState({
      studentsAbsent: this.state.studentsAbsent + 1,
          });
              
    this.increaseAbsent(this.state.studentsAbsent);
      }}>
    <Text style={{ fontWeight: 'bold' }}>ABSENT</Text>
          </TouchableOpacity>
        </View>


         <View style={{ flexDirection: 'row', marginTop: 20 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 19 }}>
            Gaurav Chaudary
    </Text>

    <TouchableOpacity style={styles.presentButton}
          onPress={() => {
    this.studentUpdate('Gaurav Chaudary', 'Present');
        this.setState({
        studentsPresent: this.state.studentsPresent + 1,
        });

  this.increasePresent(this.state.studentsPresent);
  }}>
    <Text style={{ fontWeight: 'bold' }}>PRESENT</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.presentButton}
      onPress={() => {
        this.studentUpdate('Gaurav Chaudary', 'Absent');
            this.setState({
      studentsAbsent: this.state.studentsAbsent + 1,
          });
              
    this.increaseAbsent(this.state.studentsAbsent);
      }}>
    <Text style={{ fontWeight: 'bold' }}>ABSENT</Text>
          </TouchableOpacity>
        </View>


        

         <View style={{ flexDirection: 'row', marginTop: 20 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 19 }}>
            Amit Bhadana
    </Text>

    <TouchableOpacity style={styles.presentButton}
          onPress={() => {
    this.studentUpdate('Amit Bhadana', 'Present');
        this.setState({
        studentsPresent: this.state.studentsPresent + 1,
        });

  this.increasePresent(this.state.studentsPresent);
  }}>
    <Text style={{ fontWeight: 'bold' }}>PRESENT</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.presentButton}
      onPress={() => {
        this.studentUpdate('Amit Bhadana', 'Absent');
            this.setState({
      studentsAbsent: this.state.studentsAbsent + 1,
          });
              
    this.increaseAbsent(this.state.studentsAbsent);
      }}>
    <Text style={{ fontWeight: 'bold' }}>ABSENT</Text>
          </TouchableOpacity>
        </View>

<View style={{ flexDirection: 'row', marginTop: 50 }}></View>

    <TouchableOpacity style={{ borderWidth: 5, backgroundColor: 'blue', padding: 10 }}
      onPress={() => {
        this.reset();
  }}>
  <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>RESET</Text>
    </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
        this.goToSummary();
        }}
      style={{ backgroundColor: 'violet', borderWidth: 4, padding: 10 }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentButton: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    marginLeft: 16,
  },
});