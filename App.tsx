import React from "react";

import { SafeAreaView, StyleSheet, View, Platform } from "react-native";
import Routes from "./src/routes/Routes";

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 40,
        }}
      >
        <Routes />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
  },
});

export default App;
