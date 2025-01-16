import React from 'react'

import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft } from 'lucide-react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';

import CustomTextInput from '@/components/shared/CustomTextInput'
import OnboardingButton from '@/components/shared/OnboardingButton'

export default function SignUpScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[50px]'>
                <TouchableOpacity>
                    <ChevronLeft size={20} color={'#E2F163'} />
                </TouchableOpacity>
                <Text className='text-[20px] text-limeGreen font-bold'>
                    Create Account
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <ScrollView>
                <View className='w-full px-[30px] justify-between items-center mb-[20px]'>
                    <Text className='text-[20px] text-white font-bold mb-[20px]'>
                        Let's Start
                    </Text>
                </View>
                <View className='w-full px-[40px] py-[20px] bg-lightPurple items-center mb-[50px]'>
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "example@example.com",
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Full name'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "+123 456 78900",
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Email or Mobile Number'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "***************",
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Password'
                        padding='25px'
                        marginBottom='15px'
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "***************",
                            keyboardType: 'email-address',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Confirm Password'
                        padding='25px'
                        marginBottom='15px'
                    />
                </View>
                <View className='w-full px-[30px] items-center mb-[20px]'>
                    <Text className='text-[12px] text-white'>
                        By continuing, you agree to 
                    </Text>
                    <View className='w-full flex flex-row justify-center mb-[20px]'>
                        <TouchableOpacity>
                            <Text className='text-[12px] text-limeGreen font-bold mr-[5px]'>
                                Terms of Use
                            </Text>
                        </TouchableOpacity>
                        <Text className='text-[12px] text-white mr-[5px]'>
                            and
                        </Text>
                        <TouchableOpacity>
                            <Text className='text-[12px] text-limeGreen font-bold'>
                                Privacy Policy
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <OnboardingButton buttonText='Sign Up' onClick={() => {}} />
                    <Text className='text-[12px] text-white mt-[20px] mb-[10px]'>
                        or sign up with
                    </Text>
                    <View className='w-full flex flex-row mb-[40px] justify-center'>
                        <TouchableOpacity>
                            <View className='w-[35px] h-[35px] rounded-[15px] bg-white items-center justify-center mr-[10px]'>
                                <FontAwesome5 name="google" size={20} color={'#B3A0FF'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className='w-[35px] h-[35px] rounded-[15px] bg-white items-center justify-center mr-[10px]'>
                                <FontAwesome5 name="facebook" size={22} color={'#B3A0FF'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className='w-[35px] h-[35px] rounded-[15px] bg-white items-center justify-center'>
                                <Entypo name="fingerprint" size={22} color={'#B3A0FF'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className='w-full flex flex-row justify-center'>
                        <Text className='text-[12px] text-white mr-[5px]'>
                            Already have an account?
                        </Text>
                        <TouchableOpacity>
                            <Text className='text-[12px] text-limeGreen'>
                                Log In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
