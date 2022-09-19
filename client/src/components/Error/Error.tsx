import React from 'react'

export const Error = () => {
	return (
		<div className='w-screen h-screen grid items-center justify-center'>
			<div className='flex flex-col justify-between px-8 py-9 gap-7 w-screen max-w-[25.125rem] max-h-[29.3125rem] rounded-xl shadow-main bg-white'>
				<p className='font-poppins font-medium text-base text-dark text-center'>
					File type is not supported
				</p>
			</div>
		</div>
	)
}
