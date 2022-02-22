import { cars } from "../../data/data";

type Action = {
  type: any;
  payload: any;
};

export const carsReducer = (state = cars, action: Action) => {
  switch (action.type) {
    case "remove-car": {
      return { ...state, id: state[action.payload - 1].id };
    }
    default:
      return state;
  }
};
