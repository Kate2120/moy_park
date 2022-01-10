import React from "react";

const defaultState = {
    action: false,
  };
  interface Action{
    type: string,
    payload: boolean,
  }
export const modalReduser = (state = defaultState, action: Action) => {
    switch (action.type) {
        
      default:
        return state;
    }
  };
