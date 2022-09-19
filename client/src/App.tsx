import React from 'react'
import { useAppSelector } from './app/hooks'
import { Error } from './components/Error/Error'
import { Footer } from './components/Footer/Footer'
import { Loading } from './components/Loading/Loading'
import { Success } from './components/Success/Success'
import { Uploader } from './components/Uploader/Uploader'

const App = () => {
	const { errorType, isLoading, isSuccess } = useAppSelector(
		store => store.fileUpload
	)

	if (isLoading) {
		return (
			<div className='flex flex-col h-screen justify-between px-3 md:px-0'>
				<div className='w-full md:min-w-[25rem] md:w-0 m-auto'>
					<Loading />
				</div>
			</div>
		)
	}

	if (errorType && errorType === 'extension') {
		return (
			<div className='flex flex-col h-screen justify-between px-3 md:px-0'>
				<div className='w-full md:min-w-[25rem] md:w-0 m-auto'>
					<Error />
				</div>
			</div>
		)
	}

	if (isSuccess && !errorType) {
		return (
			<div className='flex flex-col h-screen justify-between px-3 md:px-0'>
				<div className='w-full md:min-w-[25rem] md:w-0 m-auto'>
					<Success />
				</div>
			</div>
		)
	}

	return (
		<div className='flex flex-col h-screen justify-between px-3 md:px-0'>
			<div className='w-full md:min-w-[25rem] md:w-0 m-auto'>
				<Uploader />
			</div>
			<Footer />
		</div>
	)
}

export default App
