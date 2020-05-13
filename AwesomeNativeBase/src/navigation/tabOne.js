import * as React from 'react';
import { useState,useEffect } from 'react';
import { View, Image ,Alert,FlatList} from "react-native";
import { Container, Header, Item, Input, Icon,
         Button, Text ,Card,CardItem, Body, Content, 
         Left, Right, Thumbnail, Badge} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Progress from 'react-native-progress';


import firestore from '@react-native-firebase/firestore';

import styles from "./styles";
import Project2 from "./project2.js";

const logo = require("../../assets/give.png");


function HomeScreen({ navigation }) {
  const [ loading, setLoading ] = useState(true);
  const [ todos, setTodos ] = useState([]);
  const ref = firestore()
  .collection('Donate_Project').orderBy('deadline');
  
  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { pro_group, pro_name ,deadline,
          target_money,now_money,picture} = doc.data();
        list.push({
          id: doc.id,
          pro_group,
          pro_name,
          deadline,
          target_money,
          now_money,
          picture
        });
      });
      setTodos(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  return (
    <Container>
        <Header style={{ backgroundColor: "#ff3b7f" }} searchBar rounded >
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
        
		

         <FlatList
         data={todos}
         renderItem={({ item }) => (
           <Card style={styles.mb}>
          <CardItem button onPress={() => navigation.navigate(item.pro_name)}>
          <Left>
            <Thumbnail source={logo} />
            <Body>
         <Text style={{fontWeight: 'bold'}}>{item.pro_name}</Text>
              <Text note>{item.pro_group}</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody button onPress={() =>navigation.navigate(item.pro_name)}>
          <Image
            style={{
              resizeMode: "cover",
              width: null,
              height: 200,
              flex: 1
            }}
            source={{uri:item.picture}}
          />
        </CardItem>

        <CardItem style={{ paddingVertical: 0 }} button onPress={() =>navigation.navigate(item.pro_name)}>
          <Left>
            <Button transparent>
            <Progress.Bar progress={(item.now_money/item.target_money)} width={180} height={12} color={'#ff0080'}/>
            <Text style={{fontWeight: 'bold',color: '#FF0080'}}>
              已達 {Math.round((item.now_money/item.target_money)*100)}%</Text>
            </Button>
            
          </Left>
         
          <Right>
          {item.deadline <=30 ? 
          <Badge style={{ backgroundColor: '#820041' }}>
          <Text style={{ color: 'white'}}>剩餘 {item.deadline} 天</Text>
         </Badge>:
         <Badge style={{ backgroundColor: '#F00078' }}>
         <Text style={{ color: 'white'}}>剩餘 {item.deadline} 天</Text>
        </Badge>}
            
          </Right>
        </CardItem>

        </Card>

         )} />
         

		
        </Content>
      </Container>

  );
}

const Stack = createStackNavigator();

function App() {
	
  return (
	  <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="D" component={HomeScreen} options={{headerShown: false}}  />
        <Stack.Screen name="慢飛天使冒險旅程 邀您用愛陪伴" component={Project2} />
      </Stack.Navigator>

    
   
  );
}

export default App;
