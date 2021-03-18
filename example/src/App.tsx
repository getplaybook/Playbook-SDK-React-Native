import * as React from 'react';

import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import PlaybookSdk from 'react-native-playbook-sdk';

export default function App() {
  React.useEffect(() => {
    PlaybookSdk.set(
      '971bd7e85a77e0e71b15a2607b380d9d0e0c941dcd209c46804e8139eeb4615a',
      'user_0',
      ['36'],
      'Acme Shop',
      true
    );
    PlaybookSdk.extraSettings({
      spinnerColor: '#FF0000',
      mainColor: '#FF0000',
      mainTitle: {
        tr: 'Acme Sirketi',
        en: 'Acme Company',
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => PlaybookSdk.showListView(true)}>
        <Text>Show</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
