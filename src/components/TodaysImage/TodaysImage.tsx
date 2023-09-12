import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import { PostImage } from "../../types";

const TodaysImage: FC<PostImage> = ({ date, title, url }) => {
  //FC functinal component de React, seguido por el tipo <PostImage> que esta declarado en la carpeta types en donde especifico el tipo de datos que me devuelve la api -->typescript
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },

  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default TodaysImage;

//uri es la prop que trae react para traer una url, se manda dentro de un obj porque viene de la api
