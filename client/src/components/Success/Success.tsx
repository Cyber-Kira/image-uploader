import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import checked from './checked.png'

export const Success = () => {
	const [buttonText, setButtonText] = useState('Copy Link')
	const { fileUrl } = useAppSelector(store => store.fileUpload)

	const handleClick = async () => {
		navigator.clipboard.writeText(`http://localhost:5000/${fileUrl}`)
		setButtonText('Copied!')
		await setTimeout(() => {
			setButtonText('Copy Link')
		}, 2000)
	}

	return (
		<div className='flex flex-col justify-between items-center px-8 py-9 max-w-[25.125rem] max-h-[29.3125rem] rounded-xl shadow-main bg-white'>
			<img src={checked} className='w-[35px] h-[35px]' alt='checked' />
			<p className='font-poppins font-medium text-lg text-[#4F4F4F] mt-3'>
				Uploaded successfully!
			</p>
			<img
				className='object-cover w-auto rounded-xl my-6'
				src={`http://localhost:5000/${fileUrl}`}
				alt='uploaded'
			/>
			<div className='flex items-center w-full relative bg-[#F6F8FB] border py-[11px] pl-[7px] rounded-lg border-[#E0E0E0]'>
				<p className='truncate font-poppins font-medium text-[8px] leading-[12px] text-[#4F4F4F] w-[78%]'>
					http://localhost:5000/{fileUrl}
				</p>
				<button
					className='absolute inset-[2px] left-auto min-w-[62.75px] bg-accentBlue text-white font-poppins font-medium text-[8px] leading-[12px] rounded-lg py-[9px] px-[12px]'
					type='button'
					onClick={handleClick}
				>
					{buttonText}
				</button>
			</div>
		</div>
	)
}
