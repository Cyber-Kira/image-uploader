import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { reset } from '../../features/fileUpload/fileUploadSlice'

export const BackToButton = () => {
	const dispatch = useAppDispatch()

	return (
		<div className='absolute left-5 md:-left-4 top-6 md:top-12'>
			<button
				type='button'
				onClick={() => dispatch(reset())}
				className='flex justify-center items-center p-4 md:p-2 bg-white rounded-full shadow-sm md:shadow-main group cursor-pointer'
			>
				<span className='material-icons flex items-center justify-center text-lg w-4 h-4 group-hover:-translate-x-0.5 transition-transform cursor-pointer'>
					arrow_back_ios_new
				</span>
			</button>
		</div>
	)
}
