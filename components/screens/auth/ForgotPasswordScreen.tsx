import React from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

import CustomTextInput from '@/components/shared/CustomTextInput'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function ForgotPasswordScreen() {
  return (
    <View className='flex-1 items-center bg-black'>
      <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[50px]'>
        <TouchableOpacity>
          <ChevronLeft size={20} color={'#E2F163'} />
        </TouchableOpacity>
        <Text className='text-[20px] text-limeGreen font-bold'>
          Forgotten Password
        </Text>
        <ChevronLeft size={20} color={'#232323'} />
      </View>
      <ScrollView>
        <View className='w-full px-[30px] justify-between items-center mb-[20px]'>
          <Text className='text-[20px] text-white font-bold mb-[20px]'>
            Forgot Password?
          </Text>
          <Text className='text-[14px] text-white text-center mb-[15px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Text>
        </View>
        <View className='w-full px-[40px] py-[20px] bg-lightPurple items-center mb-[50px]'>
          <CustomTextInput 
            inputProps={{
              placeholder: "example@example.com",
              keyboardType: 'email-address',
              // onChangeText: formik.handleChange("email"),
              // value: formik.values.email,
              autoCapitalize: 'none'
            }}
            customLabel='Enter your email address'
            padding='25px'
            marginBottom='15px'
          />
        </View>
        <View className='w-full px-[30px] items-center mb-[20px]'>
          <OnboardingButton buttonText='Continue' onClick={() => {}} />
        </View>
      </ScrollView>
    </View>
  )
}

