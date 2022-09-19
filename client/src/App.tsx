import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { uploadFile, uploadFiles } from './features/fileUpload/fileUploadSlice'
import image from './image.svg'
import checked from './checked.png'

const App = () => {
	const { fileUrl, errorType, isLoading, isSuccess } = useAppSelector(
		store => store.fileUpload
	)
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

	const handleClick = () => {
		navigator.clipboard.writeText(
			`https://image-uploader-sxrl.onrender.com/${fileUrl}`
		)
	}

	const dragOverHandler = (ev: React.DragEvent<HTMLDivElement>) => {
		ev.preventDefault()
		document.querySelector('#drop-zone')?.classList.add('bg-[#eef5ff]')
	}

	const dragLeaveHandler = (ev: React.DragEvent<HTMLDivElement>) => {
		ev.preventDefault()
		document.querySelector('#drop-zone')?.classList.remove('bg-[#eef5ff]')
	}

	if (isLoading) {
		return (
			<div className='w-screen h-screen grid items-center justify-center'>
				<div className='flex flex-col justify-between px-8 py-9 gap-7 w-screen max-w-[25.125rem] max-h-[29.3125rem] rounded-xl shadow-main bg-white'>
					<p>Uploading...</p>
					<div className='h-[.375rem] w-full rounded-lg bg-[#F2F2F2] overflow-hidden'>
						<div className='w-full h-full bg-accentBlue origin-left animate-indeterminate' />
					</div>
				</div>
			</div>
		)
	}

	if (errorType && errorType === 'extension') {
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

	if (isSuccess && !errorType) {
		return (
			<div className='w-screen h-screen grid items-center justify-center'>
				<div className='flex flex-col justify-between items-center px-8 py-9 w-screen max-w-[25.125rem] max-h-[29.3125rem] rounded-xl shadow-main bg-white'>
					<img src={checked} className='w-[35px] h-[35px]' alt='checked' />
					<p className='font-poppins font-medium text-lg text-[#4F4F4F] mt-3'>
						Uploaded successfully!
					</p>
					<img
						className='object-cover w-auto rounded-xl my-6'
						src={`https://image-uploader-sxrl.onrender.com/${fileUrl}`}
						alt='uploaded'
					/>
					<div className='flex items-center w-full relative bg-[#F6F8FB] border py-[11px] pl-[7px] rounded-lg border-[#E0E0E0]'>
						<p className='truncate font-poppins font-medium text-[8px] leading-[12px] text-[#4F4F4F] w-[78%]'>
							https://image-uploader-sxrl.onrender.com/${fileUrl}
						</p>
						<button
							className='absolute inset-[2px] left-auto bg-accentBlue text-white font-poppins font-medium text-[8px] leading-[12px] rounded-lg py-[9px] px-[12px]'
							type='button'
							onClick={handleClick}
						>
							Copy link
						</button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className='w-screen h-screen grid items-center justify-center'>
			<div className='flex flex-col justify-between items-center px-8 py-9 w-screen h-[29.3125rem] max-w-[25.125rem] max-h-[29.3125rem] rounded-xl shadow-main bg-white'>
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
					className='font-poppins font-medium text-xs leading-[17px] px-4 py-2 bg-accentBlue text-white rounded-lg w-fit hover:cursor-pointer'
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
					href={`http://localhost:5000/${fileUrl}`}
				>
					{fileUrl && `http://localhost:5000/${fileUrl}`}
				</a>
			</div>
		</div>
	)
}

export default App
