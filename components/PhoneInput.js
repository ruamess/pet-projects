'use client'
import React from 'react';
import InputMask from 'react-input-mask';

export default function PhoneInput() {

	return (
		<InputMask
			mask="+7 (999) 999-99-99"
			maskChar="_"
			// value={value}
			// onChange={onChange}
			placeholder="+7 (___) ___-__-__"
			className='bg-bg text-white focus:outline-none hover:bg-acc focus:bg-acc duration-500  placeholder-white rounded-lg container md:w-[401px] h-[68px] text-3xl p-5'
		/>
	)
}
