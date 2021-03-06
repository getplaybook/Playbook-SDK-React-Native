import * as React from 'react';

import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import PlaybookSdk from 'react-native-playbook-sdk';

export default function App() {
  React.useEffect(() => {
    PlaybookSdk.set(
      'PyL5rCxlwns78FoGjDi1AbQdNVBtqg00MUHz0Y2N5yqk22vmB0u5imFtE9ya',
      'user_0',
      ['53'],
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
