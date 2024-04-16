import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Touchable,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const index = () => {
  return (
    <SafeAreaView className="flex-1 ">
      <ImageBackground
        source={require("../assets/images/home-bg.png")}
        className="flex-1 justify-center "
        resizeMode="cover"
      >
        <View className="h-full">
          <View className="z-10 absolute w-full mt-36">
            <Text className="text-center text-white font-bold text-5xl mb-20">
              WARDROBE
            </Text>
            <View className="mx-5">
              <View className="w-full relative h-16 px-4 border-white bg-white rounded-xl flex flex-row items-center">
                <Image source={require("../assets/images/email.png")} />
                <TextInput
                  className="flex-1 text-black font-semibold text-base pl-2"
                  placeholder="EMAIL"
                  placeholderTextColor="#7B7B8B"
                />
              </View>
              <View className="w-full relative h-16 px-4  mt-2  border-white bg-white rounded-xl flex flex-row items-center">
                <Image source={require("../assets/images/passwordIcon.png")} />
                <TextInput
                  className="flex-1 text-black text-sm font-semibold ml-2"
                  placeholder="PASSWORD"
                  placeholderTextColor="#7B7B8B"
                  secureTextEntry={true}
                />
              </View>
              <View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  className="bg-black mt-3 text-white rounded-xl min-h-[62px] flex flex-row justify-center items-center"
                >
                  <Text className=" text-white font-bold text-lg">Login</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-center mt-5 font-semibold">
                FORGET PASSWORD?
              </Text>
              <Image source={require("../assets/images/OR.png")} className="my-5 ml-2" />
              <View className="w-full relative h-16 px-4 border-white bg-white rounded-xl flex flex-row justify-center items-center">
                <Image source={require("../assets/images/googleIcon.png")} />
                <Text className="text-center ml-3">LOGIN WITH GOOGLE</Text>
              </View>
              <View className="flex flex-row justify-center items-center mt-14">
                <Text>DON'T HAVE AN ACCOUNT ? </Text>
                <Text className="font-bold uppercase">Signup</Text>
              </View>
            </View>
          </View>
        </View>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(255, 255, 255, 0)",
            "rgba(217, 185, 155, 0.6)",
            "rgba(217, 185, 155, 1)",
            "rgba(217, 185, 155, 1)",
            "rgba(217, 185, 155, 1)",
            "rgba(217, 185, 155, 1)",
            "rgba(217, 185, 155, 1)",
            "rgba(217, 185, 155, 1)",
          ]}
          style={styles.background}
        ></LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 480,
    zIndex: 0,
  },
  fontsPop: {
    fontFamily: "Poppins",
  },
});

export default index;
