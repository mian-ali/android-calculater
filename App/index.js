import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView } from "react-native";
import Routes from "./components/Routes";
import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFFF",
    justifyContent: 'flex-end',
    marginTop:270,
    // height:"70%",
  },
  value: {
    color: "black",
    fontSize: 65,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 50
  },
  // Nav:{
  //   height:"100%",
  //   width:"100%",
  //   backgroundColor:'yellow'
  // }
  Nav:{
    color:'black',
    backgroundColor:'#F0FFFF',
    padding:20,
    // fontWeight:'bold',
    marginTop:11,
    // fontWeight:,
    fontSize:19

  },
  TopNav:{
    height:'15%',
    width:'100%',
    backgroundColor:'yellow',
    marginBottom:83
  },
  TouchFlex:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    borderRadius:5
  },
});

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Routes /> */}

        {/* <View style={styles.Nav}>
          <Text>Calulater</Text>
          <Text>Exchange Rate</Text>
          <Text>Converter</Text>

          </View>
         */}
                             <View style={styles.TopNav}>
                      <View style={styles.TouchFlex}>
                       <TouchableOpacity>
                      <Text style={styles.Nav}>Calculater</Text></TouchableOpacity>
                      <TouchableOpacity><Text style={styles.Nav}>Exchange Rate</Text></TouchableOpacity>
                      <TouchableOpacity><Text style={styles.Nav}>Converter</Text></TouchableOpacity>

                      </View>
                    </View>


        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap("posneg")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
