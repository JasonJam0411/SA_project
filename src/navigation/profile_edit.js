import * as React from 'react';
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal,Provider,TextInput } from 'react-native-paper';
export default class ProfileEdit{
  state = {
    visible: false,
    email: '',
    address:'',
    phone:'',
  };
  
  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
       <Provider>
      <View>
        <Button onPress={this._showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog
             visible={this.state.visible}
             onDismiss={this._hideDialog}>
            <Dialog.Title>編輯個人資訊</Dialog.Title>
            <Dialog.Content>
            <TextInput
                mode="outlined"
                label='Email'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
            />
            <TextInput
                mode="outlined"
                label='地址'
                value={this.state.address}
                onChangeText={address => this.setState({ address })}
            />
            <TextInput
                mode="outlined"
                label='手機'
                value={this.state.phone}
                onChangeText={phone => this.setState({ phone })}
            />
            </Dialog.Content>
            <Dialog.Actions>
                <Button mode="contained" onPress={this._hideDialog}>確認修改</Button>
                <Button onPress={this._hideDialog}>取消</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      </Provider>
      
    );
  }
}