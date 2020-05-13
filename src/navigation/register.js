import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Title, Left, Right, Body, Button, Item, Label, Input, Form} from 'native-base';
export default class CardListExample extends Component {
  render() {
    return (
      <Container>
        <Header>
         <Left>
          <Button hasText transparent>
           <Text>Back</Text>
          </Button>
         </Left>
         <Body>
          <Title>註冊新帳號</Title>
         </Body>
         <Right>
          <Button hasText transparent>
          <Text onPress={() => alert("連到登入頁面")}>Cancel</Text>
          </Button>
         </Right>
        </Header>

        <Content style={{marginTop:'8%'}}>
        <Form style={{width: '90%', marginLeft:'5%'}}>
          <Item stackedLabel>
            <Label>姓名:</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>帳號名稱:</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>密碼:</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>確認密碼:</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>Email:</Label>
            <Input />
          </Item>
        </Form>
        <Button style={{alignItems:'center', justifyContent:'center', width: '80%', marginTop:'13%', marginLeft:'10%'}} onPress={() => alert("註冊成功")} block info>
          <Text style={{textAlign: 'center', fontSize: 24, color:"#D4E8F6"}}>註冊</Text>
        </Button>
        </Content>
      </Container>
    );
  }
}