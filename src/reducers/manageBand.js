export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      console.log("add")
      const band = {
        id: Math.random()*100,
        name :action.name
      }

      return {bands: state.bands.concat(band)}
      // return { ...state, bands: [...state.bands, action.name] }

    case 'DELETE_BAND':
      console.log("delete action")
      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };
    default:
      return state;
  }
};
