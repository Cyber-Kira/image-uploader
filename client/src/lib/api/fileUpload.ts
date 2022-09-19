/* eslint-disable no-console */
export const uploadFileToServer = async (
	event: React.ChangeEvent<HTMLInputElement>
) => {
	const { files } = event.target
	const formData = new FormData()

	formData.append('sampleFile', files ? files[0] : '')

	const requestOptions = {
		method: 'POST',
		body: formData,
	}

	return fetch(
		'https://image-uploader-sxrl.onrender.com/upload',
		requestOptions
	)
		.then(response => response.json())
		.then(res => {
			return res
		})
		.catch(err => console.error(err))
}

export const uploadFilesToServer = async (file: File) => {
	const formData = new FormData()

	formData.append('sampleFile', file)

	const requestOptions = {
		method: 'POST',
		body: formData,
	}

	return fetch(
		'https://image-uploader-sxrl.onrender.com/upload',
		requestOptions
	)
		.then(response => response.json())
		.then(res => {
			return res
		})
		.catch(err => console.error(err))
}

export const fetchFile = async (fileName: string) => {
	return fetch(`https://image-uploader-sxrl.onrender.com/${fileName}`, {
		method: 'GET',
	})
		.then(response => response.json())
		.then(res => {
			return res
		})
		.catch(err => console.error(err))
}
