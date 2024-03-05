import React, { useReducer } from 'react';
import { BlogContext } from '../context';
import { blogReducer, initialState } from '../reducer/postReducer';

const BlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogReducer, initialState)
    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContextProvider;