import React, { useState } from 'react'
import { Image, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { ChevronDown, ChevronLeft } from 'lucide-react-native'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'

export default function PasswordSettingsScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <View className='flex-row w-full px-[30px] justify-between items-center mt-[50px] mb-[15px]'>
                <TouchableOpacity className='flex-row items-center'>
                    <ChevronLeft size={20} color={'#E2F163'} />
                    <Text className='text-[20px] font-bold text-lightPurple ml-[5px]'>
                        Password Settings
                    </Text>
                </TouchableOpacity>
                <Text className='text-[20px] text-black font-bold'>
                    /
                </Text>
                <ChevronLeft size={20} color={'#232323'} />
            </View>
            <View className='w-full p-[30px] items-center mb-[10px]'>
                <CustomTextInput 
                    inputProps={{
                        placeholder: "***************",
                        keyboardType: 'email-address',
                        // onChangeText: formik.handleChange("email"),
                        // value: formik.values.email,
                        autoCapitalize: 'none'
                    }}
                    customLabel='Current Password'
                    customLabelColor={'#B3A0FF'}
                    isPassword={true}
                    padding='25px'
                />
                <View className='w-full flex items-end'>
                    <TouchableOpacity>
                        <Text className='text-[12px] text-lightPurple'>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='w-full p-[30px] items-center mb-[20px]'>
                <CustomTextInput 
                    inputProps={{
                        placeholder: "***************",
                        keyboardType: 'email-address',
                        // onChangeText: formik.handleChange("email"),
                        // value: formik.values.email,
                        autoCapitalize: 'none'
                    }}
                    customLabel='New Password'
                    customLabelColor={'#B3A0FF'}
                    isPassword={true}
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
                    customLabel='Confirm New Password'
                    customLabelColor={'#B3A0FF'}
                    isPassword={true}
                    padding='25px'
                    marginBottom='70px'
                />
                <View className='w-full items-center'>
                    <ButtonText buttonText='Change Password' onClick={() => {}}/>
                </View>
            </View>
        </View>
    )
}
