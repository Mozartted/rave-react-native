import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from 'react-native-rave/src/components/Header';

export default class CardUgMobileMoneyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'mobilemoneyuganda' };
    this.switchToCard = this.switchToCard.bind(this);
    this.switchToUgMobileMoney = this.switchToUgMobileMoney.bind(this);
  }

  switchToCard() {
    this.props.page("card");
    this.setState({
      page: "card"
    })
  }

  switchToUgMobileMoney() {
    this.props.page("mobilemoneyuganda");
    this.setState({
      page: "mobilemoneyuganda"
    })
  }

  render() {
    return (
      <View>
        {/* <Header /> */}
        <View style={styles.container}>
          <View style={styles.nav}>
            <TouchableOpacity
              style={{
                width: '49.5%'}}
                onPress={this.switchToCard}>
              <Text style={{ fontSize: 16, textAlign: 'center', paddingVertical: 15, color: this.props.secondarycolor, fontWeight: (this.state.page == "card") ? "bold" : "normal", borderBottomColor: this.props.secondarycolor, borderBottomWidth: (this.state.page == "card") ? 2 : 1}}>Card</Text>
            </TouchableOpacity>
            <View style={{ width: '1%', marginVertical: 10, borderRightWidth: 1, borderRightColor: this.props.secondarycolor }}></View>
            <TouchableOpacity

              style={{
                width: '49.5%'
              }}
              onPress={this.switchToUgMobileMoney}>
              <Text style={{ fontSize: 16, textAlign: 'center', paddingVertical: 15, color: this.props.secondarycolor, fontWeight: (this.state.page == "mobilemoneyuganda") ? "bold" : "normal", borderBottomColor:this.props.secondarycolor, borderBottomWidth: (this.state.page == "mobilemoneyuganda") ? 2 : 1 }}>Uganda Mobile Money</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 0
  },
  nav: {
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    width: '100%'
  }
});