import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
	uploadFile,
	uploadFiles,
} from '../../features/fileUpload/fileUploadSlice'
import image from './image.svg'

export const Uploader = () => {
	const { fileUrl } = useAppSelector(store => store.fileUpload)
	const dispatch = useAppDispatch()
	const dropHandler = (ev: React.DragEvent<HTMLDivElement>) => {
		ev.preventDefault()

		if (ev.dataTransfer.items.length === 1) {
			const item = [...ev.dataTransfer.items][0]
			if (item.kind === 'file') {
				const file = item.getAsFile()
				if (file) {
					dispatch(uploadFiles(file))
				}
			}
			document.querySelector('#drop-zone')?.classList.remove('bg-[#eef5ff]')
		}
	}

	const dragOverHandler = (ev: React.DragEvent<HTMLDivElement>) => {
		ev.preventDefault()
		document.querySelector('#drop-zone')?.classList.add('bg-[#eef5ff]')
	}

	const dragLeaveHandler = (ev: React.DragEvent<HTMLDivElement>) => {
		ev.preventDefault()
		document.querySelector('#drop-zone')?.classList.remove('bg-[#eef5ff]')
	}

	return (
		<div className='flex flex-col justify-between items-center px-8 py-9 w-full h-[29.3125rem] max-w-[25.125rem] max-h-[29.3125rem] rounded-xl shadow-main bg-white'>
			<p className='font-poppins font-medium text-lg leading-[27px]'>
				Upload your image
			</p>
			<p className='font-poppins font-medium text-[.625rem] leading-[15px]'>
				File should be Jpeg, Png...
			</p>
			<div
				id='drop-zone'
				onDrop={e => dropHandler(e)}
				onDragOver={e => dragOverHandler(e)}
				onDragLeave={e => dragLeaveHandler(e)}
				className='flex flex-col items-center justify-center gap-9 w-full py-10 bg-[#F6F8FB] rounded-xl border-dashed border-2 border-[#97BEF4]'
			>
				<img src={image} alt='' />
				<p className='font-poppins font-medium text-xs leading-[18px] text-lightGray'>
					Drag & Drop your image here
				</p>
			</div>
			<p className='font-poppins font-medium text-xs leading-[18px] text-lightGray'>
				or
			</p>
			<label
				className='font-poppins font-medium text-xs leading-[17px] px-4 py-2 bg-accentBlue hover:bg-opacity-90 text-white rounded-lg w-fit hover:cursor-pointer'
				htmlFor='sampleFile'
			>
				<input
					type='file'
					id='sampleFile'
					name='sampleFile'
					className='hidden'
					onChange={e => dispatch(uploadFile(e))}
				/>
				Choose a file
			</label>
			<a
				rel='noreferrer'
				target='_blank'
				href={`https://image-uploader-sxrl.onrender.com/${fileUrl}`}
			>
				{fileUrl && `https://image-uploader-sxrl.onrender.com/${fileUrl}`}
			</a>
		</div>
	)
}
