import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { WebView } from 'react-native-webview';


export default function App() {
  return (
   <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://env-2598340.sp1.br.saveincloud.net.br/' }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
