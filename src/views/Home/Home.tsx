import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetchApi from "../../utils/fetch";

const Home = () => {
  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImage = await fetchApi;
      } catch (error) {}
    };
    loadTodaysImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
});

export default Home;
