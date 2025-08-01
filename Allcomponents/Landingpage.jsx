import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
// import { GoHomeFill } from 'react-icons/go';
// import { PiQrCodeLight } from 'react-icons/pi';
// import { MdHistory } from 'react-icons/md';
// import { AiOutlineUser } from 'react-icons/ai';
// import { useNavigation } from '@react-navigation/native';
import Backgroundimage from '../assets/Background.png';
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white items-center justify-center">
      
      {/* Card Container */}
      <View className="bg-white w-[100%] h-[100%] relative  rounded-xl shadow-md overflow-hidden">
        
        {/* Background Image */}
        <Image 
          source={Backgroundimage} 
          className="absolute top-0 -left-[75%] w-[150%] h-[70%]"
          resizeMode="contain"
        />

        {/* Header */}
        <View className="absolute top-3 left-0 w-full h-[8%] bg-white flex-row justify-between items-center px-5 z-20">
          <TouchableOpacity className="w-12 h-12 rounded-full bg-gray-100 justify-center items-center">
            {/* Back Icon */}
          </TouchableOpacity>
          <TouchableOpacity>
            {/* User Icon */}
          </TouchableOpacity>
        </View>
    {/* <Image 
    source={Addcart} 
     className="absolute  top-[30%] w-[10%] h-[20%]"
          resizeMode="contain"
    >

    </Image> */}
        {/* Links */}
        <TouchableOpacity className="absolute top-[60%] self-center">
          <Text className="text-lg md:text-2xl font-semibold text-black">Currency</Text>
        </TouchableOpacity>

        <TouchableOpacity className="absolute top-[70%] self-center">
          <Text className="text-lg md:text-2xl font-semibold text-black">Add Money</Text>
        </TouchableOpacity>

       
 <LinearGradient
  colors={['#c7962b', '#b6801c']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  className="absolute bottom-5 flex-row justify-around items-center h-[8%] w-[100%] rounded-xl self-center"
>
  <TouchableOpacity onPress={() => navigation.navigate("Home")} className="items-center">
    <Text className="text-[10px] text-white mt-1">Home</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate("Scan")} className="items-center">
    <Text className="text-[10px] text-white mt-1">Scan</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate("History")} className="items-center">
    <Text className="text-[10px] text-white mt-1">History</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate("userprofile")} className="items-center">
    <Text className="text-[10px] text-white mt-1">Profile</Text>
  </TouchableOpacity>
</LinearGradient>


      </View>
    </View>
  );
};

export default LandingPage;
