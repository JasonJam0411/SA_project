import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Title, Right, Body, Button, Item, Label, Input, Form} from 'native-base';
import {StyleSheet,View} from 'react-native';
import LottieView from 'lottie-react-native';

export default class CardListExample extends Component {
    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play(2, 120);
      }
    
  render() {
    return (
        <View style={styles.container}>
      <Container>

        <Title>Header</Title>
        <Content>
        <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../animation/lf30_editor_2BAhfQ.json')}
        style={{marginBottom: '-63%',width:'70%',marginLeft:'10%'}}
      />
        <Form style={styles.input}>
          <Item stackedLabel>
            <Label>帳號:</Label>
              <Input />
                </Item>
                <Item stackedLabel last>
            <Label>密碼:</Label>
              <Input />
                </Item>
        </Form>
        <Button onPress={() => alert("登入成功")} block info style={styles.buttoncolor}>
          <Text style={styles.word}>登入</Text>
        </Button>
        <Text style={{fontSize: 24,textAlign: 'center',margin: '5%',color:'#CF86B1'}}>-----------其他登入方法-----------</Text>
        <Button onPress={() => alert("正在登入Google帳號")} block info style={{marginTop: '5%',backgroundColor: '#FF3333',width:'80%',marginLeft:'10%'}}>
          <Icon active name="logo-google" />
          <Text>Google</Text>
        </Button>
        <Button onPress={() => alert("正在登入Facebook帳號")} block info style={{marginTop: '5%',backgroundColor: '#234D82',width:'80%',marginLeft:'10%'}}>
          <Icon active name="logo-facebook" />
          <Text>Facebook</Text>
        </Button>



          <Button onPress={() => alert("連到註冊頁面")} block transparent>
            <Text style={styles.word2}>還沒有帳號?點此註冊</Text>
          </Button>
        </Content>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  word: {
    fontSize: 20,
    textAlign: 'center',
    margin: '10%',

  },
  word2: {
    fontSize: 16,
    textAlign: 'center',
    margin: '10%',
    color:'black',

  },
  buttoncolor: {
    textAlign: 'center',
    backgroundColor: '#ff3b7f',
    marginTop: '15%',
    width:'80%',
    marginLeft:'10%',
  },
  input:{
      textAlign: 'center',
      marginTop: '60%',
  }
});
            
            
