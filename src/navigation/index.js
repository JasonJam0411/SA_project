import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs ,TabHeading,Icon,Text} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';

const Stack = createStackNavigator();

export default class TabsExample extends Component {
  render() {
    return (
	
      <Container >
      <NavigationContainer>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#ff3b7f'}}
		activeTabStyle={{backgroundColor:'#ff3b7f'}}
		textStyle={{color:'white'}}
		activeTextStyle={{color:'white'}} heading="選擇捐款專案" >
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#ff3b7f'}}
		activeTabStyle={{backgroundColor:'#ff3b7f'}}
		textStyle={{color:'white'}}
		activeTextStyle={{color:'white'}} heading="我的捐款紀錄">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#ff3b7f'}}
		activeTabStyle={{backgroundColor:'#ff3b7f'}}
		textStyle={{color:'white'}}
		activeTextStyle={{color:'white'}} heading="我的個人資訊">
            <Tab3 />
          </Tab>
        </Tabs>
        </NavigationContainer>
      </Container>
		
    );
  }
}