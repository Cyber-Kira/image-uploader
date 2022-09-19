import React from 'react'

export const Loading = () => {
	return (
		<div className='flex flex-col justify-between px-8 py-9 gap-7 max-w-[25.125rem] max-h-[29.3125rem] rounded-xl shadow-main bg-white'>
			<p>Uploading...</p>
			<div className='h-[.375rem] w-full rounded-lg bg-[#F2F2F2] overflow-hidden'>
				<div className='w-full h-full bg-accentBlue origin-left animate-indeterminate' />
			</div>
		</div>
	)
}
