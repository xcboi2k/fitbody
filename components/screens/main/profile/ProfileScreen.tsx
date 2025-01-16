import React, { useState, useRef, useEffect } from 'react'
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChevronLeft, ChevronRight, Pencil } from 'lucide-react-native'
import CustomTextInput from '@/components/shared/CustomTextInput'
import ButtonText from '@/components/shared/ButtonText'

export default function ProfileScreen() {
    return (
        <View className='flex-1 items-center bg-black'>
            <ScrollView>
                <View className='w-full p-[30px] bg-lightPurple items-center mt-[50px] '>
                    <View className='flex-row w-full justify-between items-center mb-[20px]'>
                        <TouchableOpacity className='flex-row items-center'>
                            <ChevronLeft size={20} color={'#E2F163'} />
                            <Text className='text-[20px] font-bold text-white ml-[5px]'>
                                My Profile
                            </Text>
                        </TouchableOpacity>
                        <Text className='text-[20px] text-lightPurple font-bold'>
                            /
                        </Text>
                        <ChevronLeft size={20} color={'#B3A0FF'} />
                    </View>
                    <View className="items-center justify-center mb-[5px] relative">
                        <View className="w-[100px] h-[100px] rounded-full overflow-hidden">
                            <Image
                            source={require('@/assets/images/misc/sample-user.jpg')}
                            className="w-full h-full object-cover"
                            />
                        </View>
                        <TouchableOpacity className="absolute bottom-0 right-0 w-[30px] h-[30px] rounded-full bg-limeGreen items-center justify-center">
                            <Pencil size={18} color={'black'} />
                        </TouchableOpacity>
                    </View>
                    <View className="items-center justify-center mb-[15px]">
                        <Text className='text-[20px] text-white font-bold'>
                            User
                        </Text>
                        <Text className='text-[13px] text-white'>
                            user@email.com
                        </Text>
                        <View className='flex-row w-full'>
                            <Text className='text-[13px] text-white font-bold mr-[5px]'>
                                Birthday:
                            </Text>
                            <Text className='text-[13px] text-white'>
                                January 1st
                            </Text>
                        </View>
                    </View>
                    <View className="bg-purple w-full rounded-[10px] px-2 py-3 flex-row items-center justify-between">
                        {/* Weight */}
                        <View className="flex-1 items-center">
                            <Text className="text-white font-bold text-[15px]">75 Kg</Text>
                            <Text className="text-white text-[15px]">Weight</Text>
                        </View>
                        <View className='h-[40px] border border-white' />
                        {/* Age */}
                        <View className="flex-1 items-center">
                            <Text className="text-white font-bold text-[15px]">28</Text>
                            <Text className="text-white text-[15px]">Years Old</Text>
                        </View>
                        <View className='h-[40px] border border-white' />
                        {/* Height */}
                        <View className="flex-1 items-center">
                            <Text className="text-white font-bold text-[15px]">1.65 Cm</Text>
                            <Text className="text-white text-[15px]">Height</Text>
                        </View>
                    </View>
                </View>
                <View className='w-full p-[30px] items-center mb-[20px]'>
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
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "100",
                            keyboardType: 'numeric',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Weight'
                        customLabelColor={'#B3A0FF'}
                        padding='25px'
                        marginBottom='15px'
                        measurementText='Kg'
                    />
                    <CustomTextInput 
                        inputProps={{
                            placeholder: "100",
                            keyboardType: 'numeric',
                            // onChangeText: formik.handleChange("email"),
                            // value: formik.values.email,
                            autoCapitalize: 'none'
                        }}
                        customLabel='Height'
                        customLabelColor={'#B3A0FF'}
                        padding='25px'
                        marginBottom='15px'
                        measurementText='Cm'
                    />
                    <View className='w-full items-center mt-[10px]'>
                        <ButtonText buttonText='Update Profile' onClick={() => {}}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
