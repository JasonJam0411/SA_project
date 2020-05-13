import * as React from 'react';
import { List, Checkbox } from 'react-native-paper';
import styles from './styles.js';
class MyComponent extends React.Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });

  render() {
    return (
      <List.Section>
        <List.Accordion
          title="慢飛天使冒險旅程 邀您用愛陪伴"
          left={props => <List.Icon {...props} icon="heart" color={'#FF0080'} />}
        >
          <List.Item title="收據編號: 10000000"/>
          <List.Item title="公益團體: 財團法人伊甸社會福利基金會" />
          <List.Item title="捐贈日期: 20200423"/>
          <List.Item title="捐款方式: 信用卡" />
          <List.Item title="捐款金額: 10000"/>
          
        </List.Accordion>

        <List.Accordion
          title="偏鄉兒的希望晚餐"
          left={props => <List.Icon {...props} icon="heart" color={'#FF0080'}/>}
        >
          <List.Item title="偏鄉兒的希望晚餐" />
          <List.Item title="Second item" />
          <List.Item title="偏鄉兒的希望晚餐" />
          <List.Item title="Second item" />
          <List.Item title="偏鄉兒的希望晚餐" />
         
        </List.Accordion>
      </List.Section>
    );
  }
}

export default MyComponent;