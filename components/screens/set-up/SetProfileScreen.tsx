import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft, Pencil } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import OnboardingButton from '@/components/shared/OnboardingButton'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'
import { NestedParamList, RootStackParamList } from '@/types/navigation';
import UserStore from '@/stores/UserStore';

export default function SetProfileScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<NestedParamList>>()
    
    const setLoggedIn = UserStore((state) => state.setLoggedIn)

    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[50px]'>
                <TouchableOpacity className='flex-row' onPress={() => navigation.navigate('SetUp', {screen: 'SetActivityLevel'})}>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[15px] text-limeGreen ml-[5px]'>
                        Back
                    </Text>
                </TouchableOpacity>
                <Text className='text-[20px] text-black font-bold'>
                    /
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <ScrollView>
                <View className='w-full px-[30px] justify-between items-center mb-[20px]'>
                    <Text className='text-[25px] text-white font-bold mb-[20px]'>
                        Fill Your Profile
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] items-center mb-[30px]'>
                    <Text className='text-[14px] text-white text-center mb-[15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Text>
                </View>
                <View className='w-full px-[30px] py-[20px] items-center bg-lightPurple mb-[30px]'>
                    <View className="items-center justify-center mb-[5px] relative">
                        <View className="w-[150px] h-[150px] rounded-full overflow-hidden">
                            <Image
                            source={require('@/assets/images/misc/sample-user.jpg')}
                            className="w-full h-full object-cover"
                            />
                        </View>
                        <TouchableOpacity className="absolute bottom-0 right-0 w-[30px] h-[30px] rounded-full bg-limeGreen items-center justify-center">
                            <Pencil size={18} color={'black'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='w-full px-[30px] py-[20px] items-center mb-[30px]'>
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "full name",
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Full name'
                        customLabelColor={'#B3A0FF'}
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "nickname",
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Full name'
                        customLabelColor={'#B3A0FF'}
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "example@example.com",
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Email'
                        customLabelColor={'#B3A0FF'}
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "123 456 78900",
                            keyboardType: 'numeric',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Mobile Number'
                        customLabelColor={'#B3A0FF'}
                        padding='25px'
                        marginBottom='15px'
                        isMobileNumber={true}
                    />
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <ButtonText buttonText='Start' onClick={() => setLoggedIn()}/>
                </View>
            </ScrollView>
        </View>
    )
}
