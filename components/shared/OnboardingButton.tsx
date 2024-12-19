import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

// Define the props interface
interface OnboardingButtonProps {
    buttonText: string;
    onClick: () => void; // Function type for onClick
}

export default function OnboardingButton({ buttonText, onClick }: OnboardingButtonProps) {
    return (
        <TouchableOpacity 
            className='w-[215px] rounded-[100px] bg-[#FFFFFF1A] border border-white shadow-lg p-[10px]' 
            onPress={onClick}
        >
            <Text className='text-white text-[18px] font-bold text-center'>Next</Text>
        </TouchableOpacity>
    )
}
