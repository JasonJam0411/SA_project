import * as React from 'react';

import { View, Image ,Alert} from "react-native";
import { Container, Header, Item, Input, Icon, Button, Text ,Card,CardItem, Body, Content, Left, Right, Thumbnail} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from "./styles";
import CardShowcaseExample from "./project2.js";

const logo = require("../../assets/heart.png");
const cardImage01 = require("../../assets/project01.jpg");
const cardImage02 = require("../../assets/project02.jpg");


function DetailsScreen({ navigation }) {
  return (
    <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input placeholder="搜尋機構名稱" />
            <Icon name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
		<Content padder>
          <Card style={styles.mb}>
            <CardItem button onPress={() => navigation.navigate('Details')}>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>慢飛天使冒險旅程 邀您用愛陪伴</Text>
                  <Text note>財團法人伊甸社會福利基金會</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody button onPress={() => Alert.alert('hi')}>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={cardImage01}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }} button onPress={() => Alert.alert('hi')}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 人已捐款</Text>
                </Button>
              </Left>
             
              <Right>
                <Text>剩餘 30 天</Text>
              </Right>
            </CardItem>
          </Card>
		
			<Card style={styles.mb}>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>偏鄉兒的希望晚餐</Text>
                  <Text note>社團法人中華民國肯愛社會服務協會</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={cardImage02}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>4923 人已捐款</Text>
                </Button>
              </Left>
             
              <Right>
                <Text>剩餘 98 天</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>

  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CardShowcaseExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
