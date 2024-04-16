import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const image = {
  uri: "https://www.shutterstock.com/image-photo/modern-wardrobe-stylish-spring-clothes-260nw-1699684156.jpg",
};

const _layout = () => {
  return (
    <SafeAreaView className="flex-1">
        <ImageBackground  source={image} className="flex-1 justify-center" resizeMode="cover" /> 

        <View>
            <Text>sdilk</Text>
        </View>
      
    </SafeAreaView>
  );
};

export default _layout;
