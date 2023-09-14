import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { format, sub } from "date-fns";

import Header from "../../components/Header/Header";
import TodaysImage from "../../components/TodaysImage/TodaysImage";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";
import fetchApi from "../../utils/fetch";
import { PostImage } from "../../types";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({}); //constante de estado local
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    //hook de react para hacer una llamada a la api
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({}); //en caso de que no llegue la rta de la api, se va a setear la imagen al valor inicial, no se muestra nada en pantalla y se limpia el valor del estado
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
});

export default Home;
