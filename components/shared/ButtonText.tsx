import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

// Define the props interface
interface ButtonProps {
    buttonText: string;
    onClick: () => void; // Function type for onClick
}

export default function ButtonText({ buttonText, onClick }: ButtonProps)  {
    return (
        <TouchableOpacity 
            className='w-[215px] rounded-[100px] bg-limeGreen border border-white shadow-lg p-[10px]' 
            onPress={onClick}
        >
            <Text className='text-black text-[18px] font-bold text-center'>{buttonText}</Text>
        </TouchableOpacity>
    )
}
