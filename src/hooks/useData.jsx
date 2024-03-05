import React, { useContext } from 'react';
import { BlogContext } from '../context';

const useBlogs = () => {
    const { state, dispatch } = useContext(BlogContext)
    return { state, dispatch }
};

export default useBlogs;