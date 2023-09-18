 import { createSlice } from "@reduxjs/toolkit"
const initialState = [
    

];

const blogslice = createSlice({
    name: 'blogs',
    initialState,

reducers: {
    addBlog: (state, action) => {
    // console.log(action);
    state.push(action.payload);
    },
    editBlog:(state,action) =>{
        const {id,title,categories,content} =action.payload;
        const existingblog = state.find(blog=>blog.id===id);
        if(existingblog)
        {
            existingblog.title=title;
            existingblog.categories=categories;
            existingblog.content=content;
        }
    },
    deleteBlog: (state, action) => {
        const { id } = action.payload;
        const existingblog = state.find(blog => blog.id === id);
        if(existingblog) {
          return state.filter(blog => blog.id !== id);
        }
      },
      addlike:(state,action)=>{
        const existingblog = state.find(blog=>blog.id===action.payload.id);
        if(existingblog)
        {
            // existingblog.title=title;
            // existingblog.categories=categories;
            // existingblog.content=content;
            existingblog.likes +=1;
        }
      }
    }
 });
export const { addBlog ,editBlog,deleteBlog,addlike} = blogslice.actions
export default blogslice.reducer;