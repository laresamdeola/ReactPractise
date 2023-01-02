const reducer = (state, action) => {
      if(action.type === "ADD_ITEM"){
          const newItems = [...state.people, action.payload];
          return (
              {
                  ...state,
                  people: newItems, 
                  isShowModal: true,
                  modalContent: "Item Added"
              }
          )
      }
      
      if(action.type === "REMOVE_ITEM"){
          const filtered = state.people.filter((person) => person.id !== action.payload)
          return (
              {
                  ..state,
                  people: filtered, 
                  isShowModal: true,
                  modalContent: "Item Removed"
              }
          )
      }
      
      if(action.type === "CLOSE_MODAL"){
          return {
              ...state,
              isShowModal: false
          }
      }
      
      return state;
  };
  
  export default reducer;