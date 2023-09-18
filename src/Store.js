import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './features/Blogs/blogslice';
import addBlog  from './features/Blogs/blogslice';
import  editBlog  from './features/Blogs/blogslice';
import deleteBlog  from './features/Blogs/blogslice';
import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

let persistConfig={
  key:'root',
  storage,
};

let rootreducer =combineReducers({
 blogs: blogsReducer
  // adding:addBlog,
  // editing:editBlog,
  // deleting:deleteBlog
});
let persistedReducer =persistReducer(persistConfig,rootreducer);

export const store = configureStore({
  // reducer: {
  //   blogs: blogsReducer
    
  // },
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),

});