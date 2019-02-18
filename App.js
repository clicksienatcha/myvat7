import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label
} from "native-base";

export default class App extends React.Component {

  state = {
    loading:true,
    result:0
  }

  constructor(props) {
    super(props);

  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }


  test = (text)=>{
    console.log(text)
    this.setState({
      money:Number(text)
    })
  }
  caculate = ()=>{
    let money = this.state.money;
    console.log('จำนวนเงินที่กรอก',money);
    let sum = money + ((money*7)/100);
    console.log('ราคาที่รวม 7% แล้ว',sum);

    this.setState({
      result: sum
    });

  }

  show(money){
    return money
  }

  render() {

    

    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Header>
      <Body>
      <Title>
              <Text>Vat7</Text>
          </Title>
      </Body>
         
        </Header>
        <Content>
          <Form  style={styles.formBox}>
            <Item>
              <Input placeholder="Money" keyboardType='numeric'
              onChangeText={(text)=>{
                
                  this.test(text)
                
                }}></Input>
            </Item>
           
          </Form>
          <Button block onPress={()=>{this.caculate()}}>
              <Text>Caculate</Text>
          </Button>
          <View style={styles.resultBox}>
            <Text style={styles.resultText}> {this.state.result}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    
  },
  resultBox: {
    height: 300,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 60
  }
})