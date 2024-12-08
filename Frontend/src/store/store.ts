//After creating the slide, We'll start by creating an empty Redux store, and exporting it:
import { configureStore } from '@reduxjs/toolkit'
import categoriesReducers from './categories/categoriesSlice'
export const store = configureStore({
  reducer: {categoriesReducers},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;