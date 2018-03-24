import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class WeatherProject extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city:'',
      forecast: {
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }
  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=cbd038eac6dea6556247f669df8967e5&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', color: 'black', padding: 20, fontSize: 17 }} > Perkiraan Cuaca </Text>
      </View>

      <View style={styles.box2}>
      <Text style={{ textAlign: 'center', color: 'black', padding: 10, fontSize: 15 }} > Masukkan Nama Kota </Text>
          <View style={{marginTop:10, marginLeft: 20, marginRight: 20, padding:2, backgroundColor:'white'}}>
            <TextInput style = {{height: 40}}
              onChangeText={(city)=>this.setState({ city })}
            />
          </View>
          <View style={{marginTop:10, marginLeft: 20, marginRight: 20, padding: 1}}>
            <Button
              onPress={
                () => this.getWeather()
              }

              title="Lihat"
              accessibilityLabel="Klik untuk melihat"

            />
          </View>
      </View>

      <View style={styles.box3}>
        <View>
          <Text style = {{padding: 10, fontSize: 20}} >
              {this.state.city} {"\n"}
              Suhu{'\t'}{'\t'}: {this.state.forecast.temp} {"\n"}
              Cuaca{'\t'}: {this.state.forecast.main} {"\n"}
              Deskripsi{''}: {this.state.forecast.description}
          </Text>
         </View>
      </View>

      <View style={styles.box4}>
          <Text style={{ textAlign: 'center', color: 'black', padding: 12, fontSize: 17 }} > copyright@PadmaDewi </Text>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'lightblue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.22,
    backgroundColor: 'darkturquoise',
  },
  box2: {
    flex: 0.7,
    backgroundColor: 'aqua',
    margin: 10
  },
  box3: {
    flex: 1,
    backgroundColor: 'darkturquoise',
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  box4: {
    flex: 0.2,
    backgroundColor: 'darkturquoise',
    margin: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },

  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
});
