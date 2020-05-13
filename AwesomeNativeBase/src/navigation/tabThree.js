import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";
import LottieView from 'lottie-react-native';
import { Badge,Avatar,Button } from 'react-native-paper';

import ProfileEdit from './profile_edit.js';


class NHCardImage extends Component {

  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(2, 120);
  }
  render() {
    return (
      <Container style={styles.container_profile}>
        <Content padder>
        <View style={{zIndex:0}}> 
        <View style={{zIndex:3}}>
        <LottieView
              ref={animation => {
              this.animation = animation;
            }}
            source={require('../animation/lf30_editor_2BAhfQ.json')}
            style={{marginBottom: '-55%',width:'60%',marginLeft:'13%'}}
          />
          </View>
          <View style={{zIndex:0}}>
          <Card style={{ marginTop:'25%',height:500}}>
            <CardItem>
              <Left>
                <Body>  
                
                </Body>
              </Left>
            </CardItem>
            <View
              style={{
                borderBottomColor: '#FFC1E0',
                borderBottomWidth: 13,
                marginTop:'22%'
              }}
            />
            <View style={{marginTop:'-10%'}}>
              <View style={{alignItems: 'center'}}>          
            <CardItem>
              <Badge size={50}>USER_NAME</Badge>
            </CardItem>
             </View> 
            <CardItem>
            <Avatar.Icon size={40} icon="email"/>
            <Text style={{fontSize:18}}>{"   "}Apple@gmail.com</Text>
            </CardItem>
            <CardItem>
            <Avatar.Icon size={40} icon="home"/>
            <Text style={{fontSize:18}}>{"   "}新北市新莊區中正路510號</Text>
            </CardItem>
            <CardItem>
            <Avatar.Icon size={40} icon="cellphone"/>
            <Text style={{fontSize:18}}>{"   "}09-12345678</Text>
            </CardItem>
            </View>
            
            <CardItem style={{ marginTop:'20%' }}>
              <Left>
              <Button size={20} icon="pencil" mode="contained" onPress={() =>ProfileEdit}>
              修改個人資料
            </Button>
              </Left>
              <Right>
              <Button mode="contained" onPress={() => console.log('Pressed')}>
              登出
            </Button>
              </Right>
            </CardItem>
          </Card>
          </View>
     
          </View>
        </Content>
      </Container>
    );
  }
}

export default NHCardImage;