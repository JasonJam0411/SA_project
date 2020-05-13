import * as React from 'react';
import { ART, View, Image, StyleSheet } from 'react-native';
import { Tab, Tabs, Container, Header, Content, 
  Card, CardItem, Thumbnail, Text, Button, Icon, 
  Left, Body, Right,Badge,List ,ListItem} from 'native-base';

import * as Progress from 'react-native-progress';

state = {
  percentage: 67,
}

function Project2({ navigation }) {
 
  return (
    
    <Container>
       
        <Content padder>
          <Card>
            <CardItem >
            <Left>
             <Thumbnail source={require("../../assets/shapes.png")} />
             <Body>
                  <Text style={{fontWeight: 'bold'}}>慢飛天使冒險旅程 邀您用愛陪伴</Text>
                  <Text note>財團法人伊甸社會福利基金會</Text>
                  <Text style={styles.Text}>2020/04/08</Text>  
                </Body>
             </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../assets/project02.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View style={{flexDirection: 'row'}}>
               <View style={{flexDirection: 'column'}}>
               <List>
                <View style={{flexDirection: 'row'}}>
                <ListItem>
                <Badge style={{ backgroundColor: '#820041' }}>
                <Text>目標金額</Text>
                </Badge>
                <Text>{"　"}100000</Text>
                </ListItem>
                </View>
                <View style={{flexDirection: 'row'}}>
                <ListItem>
                <Badge style={{ backgroundColor: '#D9006C' }}>
                <Text>已捐金額</Text>
                </Badge>
                <Text>{"　"}30000</Text>
                </ListItem>
                </View>
                <View style={{flexDirection: 'row'}}>
                <ListItem> 
                <Badge style={{ backgroundColor: '#FF0080' }}>
                <Text>尚缺金額</Text>
                </Badge>
                <Text>{"　"}70000</Text>
                </ListItem>
                </View>
                </List>
                </View>
                <Right>
                
              <Progress.Circle size={150} 
                               progress={this.state.percentage/100} 
                               showsText={true} 
                               thickness={15}
                               color={'#ff0080'} 
                               formatText={() => {
                                   return `${this.state.percentage}%`
               }}/>
                    </Right>
                </View>
                <Text></Text>
                <Text>類別：婦幼關懷</Text>
                <Text>勸募核准文號：衛部救字第1081368114號</Text>
                <Text>截止日期：2020/07/10</Text>
                <Text></Text>
                <Text >
                  當貧病的家庭遭逢變故，父母相繼離世，家中5個都仍在唸書的孩子頓失依靠，這5個孩子該何去何從呢？肯愛部落待用餐計畫，於此病毒肆虐時期，提升偏鄉孩子免疫力的餐點需求就非常需要您的力量，用愛陪伴偏鄉兒，讓孩子們不再飢餓，安心及健康長大！
                </Text>
                <Text></Text>
                <Text style={{color: "#ff3b7f"}}>幸福的一口，填補孩子心中的缺口</Text>
                <Text></Text>
                <Text>
                  偏鄉部落工作機會少，近四分之一偏鄉弱勢家庭無穩定收入，多為經濟弱勢的貧困家庭；許多父母為改善家中的經濟困境，到都市謀生；逾六成的偏鄉孩子多生長在單親或隔代教養的家庭中，導致偏鄉孩童大多都在祖父母的隔代教養或是獨自在家等待父母歸來的「留守」童年。在家長無法付出關心與陪伴的生活環境中，有逾五成偏鄉孩童只能空著肚子去上學，期待中午校內的營養午餐；放學後等待他們的是必須自己張羅晚餐才能得到溫飽的空蕩餐桌。
                </Text>
                <Text></Text>
                <Text>
                在現今全球正面臨新冠病毒的肆虐，台灣也無法倖免，在此非常時期，肯愛於偏鄉部落孩子待用餐的服務，平時即注重健康均衡飲食，但於此時期更加強提升部落孩童免疫力的餐飲管理，如：五行湯、補氣雞湯、蘋果洋蔥湯、南瓜布丁、蜂蜜檸檬果醬汁、南瓜義大利麵…等，以增加孩子的抵抗力可減少各種病毒的侵襲，透過老師的健康飲食的帶領並補充孩子的營養，讓偏鄉部落孩童得以溫飽及重視身體的健康，有個像家的避風港，讓孩子們感受到少有的關懷及溫暖
                </Text>
                <Text></Text>
                <Text>部落防疫待用餐，等待認助：</Text>
                <Text>(1) 每月600元 、一年7200元，認助一個孩子待用餐。</Text>
                <Text>(2) 隨喜捐助，認助防疫待用餐基金。</Text>
                <Text></Text>
                
              </Body>
                
            </CardItem>
            <CardItem footer bordered>
              <Button
                style={styles.buttonColor}
                onPress={() => navigation.navigate('Details')}
              >
                  <Text> 立即捐款 </Text>
            </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}

export default Project2;

const styles = StyleSheet.create({
   
   Text: {
    marginLeft: 200,
    color: "#000000",
    
},
    buttonColor: {
    backgroundColor: "#ff3b7f",
    marginLeft: 130
},
    Text2: {
        fontSize: 18,
        color: "#000000",

}
});