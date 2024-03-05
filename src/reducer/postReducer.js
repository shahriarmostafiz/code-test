import actions from "../actions";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
};
const blogReducer = (state, action) => {
  switch (action.type) {
    case actions.blogs.Data_Fetching: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.blogs.Data_Fetched: {
      return {
        ...state,
        loading: false,
        blogs: action.data.blogs,
      };
    }
    case actions.blogs.Data_Created: {
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.data.blog],
      };
    }
    case actions.blogs.Date_Fetching_Error: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};
export { blogReducer, initialState };
