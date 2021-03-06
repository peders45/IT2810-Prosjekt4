import store from '../../store';
import actionTypes from '../../actionTypes';
import {AsyncStorage} from 'react-native';
 
//Actions for saving favourites locally with AsyncStorage, takes in the id of the menu item to save
export function saveFavourite(menuId) {
    const state = store.getState();

  return async function(dispatch) {
    dispatch({
      type: actionTypes.SAVE_FAVOURITE_REQUESTED,
      payload: 0
    })
    try{
        const data = await AsyncStorage.getItem('McFavs');
        if(data){
            const favs = JSON.parse(data);
            if (favs.find(item =>(item._id == menuId))){
                throw Error("Item already in favourites")
            }
            if(favs.length > 5){
              favs.shift()
            }
            const newFav = state.menus.find(item => {
                return item._id == menuId;
            });
            favs.push(newFav)
            await AsyncStorage.setItem('McFavs', JSON.stringify(favs));
            return dispatch({
                type: actionTypes.SAVE_FAVOURITE_RECIEVED,
                payload: favs
              })
        }else{
            const favs = [];
            const newFav = state.menus.find(item => {
                return item._id == menuId;
            });
            favs.push(newFav)
            await AsyncStorage.setItem('McFavs', JSON.stringify(favs));
            return dispatch({
                type: actionTypes.SAVE_FAVOURITE_RECIEVED,
                payload: favs
              })
        }
    }catch(error){
        return dispatch({
            type: actionTypes.SAVE_FAVOURITE_FAILED,
            payload: error
          })
    }
}
}

//Actions for fetching locally stored favourites with AsyncStorage
export function showFavourites() {

    return  async function(dispatch) {
      dispatch({
        type: actionTypes.SHOW_FAVOURITE_REQUESTED,
        payload: 0
      })
      try{
        const data = await AsyncStorage.getItem('McFavs');
        if(data){
            const favs = JSON.parse(data);
            //New state to be set
            const newState = {
                drawerStatus: false,
                searchWord: "",
                menus: favs,
                category: [],
                sortCategory: "",
                sortValue: null,
                status: "",
                first: favs.length,
                offset: 0,
                count:favs.length,
                error: []
            }
            return dispatch({
                type: actionTypes.SHOW_FAVOURITE_RECIEVED,
                payload: newState
              })
        }else{
            throw Error("No data is stored locally")
        }

      }catch(error){
        return dispatch({
            type: actionTypes.SHOW_FAVOURITE_FAILED,
            payload: error
          })
        }
      }
    }
  