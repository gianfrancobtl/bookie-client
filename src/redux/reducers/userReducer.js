import {
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    LIKE_SCREAM,
    UNLIKE_SCREAM,
    MARK_NOTIFICATIONS_READ
  } from '../types';
  
  // object that sets the initial state. //
  const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
    likes: [],
    notifications: []
  };
  
  // Function that receives the initialState and and action that may change the initial value. //
  export default function(state = initialState, action) {
    // Do something  for each type. //
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case SET_USER:
        return {
          authenticated: true,
          loading: false,
          // Payload is res.data, all the user data.  //
          ...action.payload
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true
        };
      case LIKE_SCREAM:
        return {
          ...state,
          likes: [
            ...state.likes,
            {
              userHandle: state.credentials.handle,
              screamId: action.payload.screamId
            }
          ]
        };
      case UNLIKE_SCREAM:
        return {
          ...state,
          likes: state.likes.filter(
            (like) => like.screamId !== action.payload.screamId
          )
        };
      case MARK_NOTIFICATIONS_READ:
        state.notifications.forEach((not) => (not.read = true));
        return {
          ...state
        };
      default:
        return state;
    }
  }