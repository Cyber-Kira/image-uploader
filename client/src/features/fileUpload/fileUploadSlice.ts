import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	uploadFilesToServer,
	uploadFileToServer,
} from '../../lib/api/fileUpload'

const initialState = {
	isLoading: false,
	fileUrl: '',
	isSuccess: false,
	errorType: '',
}

export const uploadFile = createAsyncThunk(
	'fileUpload/uploadfile',
	async (event: React.ChangeEvent<HTMLInputElement>) => {
		const data = await uploadFileToServer(event)
		return data
	}
)

export const uploadFiles = createAsyncThunk(
	'fileUpload/uploadfile',
	async (files: File) => {
		const data = await uploadFilesToServer(files)
		return data
	}
)

export const fileUploadSlice = createSlice({
	name: 'fileUpload',
	initialState,
	reducers: {
		reset: () => initialState,
	},
	extraReducers: builder =>
		builder
			.addCase(uploadFile.pending, state => {
				state.isLoading = true
			})
			.addCase(uploadFile.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.isSuccess = true
				state.fileUrl = payload.data.name
				state.errorType = payload.errorType
			})
			.addCase(uploadFile.rejected, state => {
				state.isLoading = false
			}),
})

export const { reset } = fileUploadSlice.actions
