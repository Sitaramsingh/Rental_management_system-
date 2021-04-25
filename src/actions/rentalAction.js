import {actionTypes} from '../constants';


export const getCatalogData = () => {
    return (dispatch => {
       return fetch('catalog.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }) .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            if(myJson.status === 'success'){
              dispatch(cataLogResponse(myJson.data));
            }
          }).catch(err => {
            throw (err);
        });
    })}

    const cataLogResponse = (payload) => {
      return { type: actionTypes.RENETAL_RESPONSE, data: payload };
    }

    export const categoryAction = (payload) => {
      return (dispatch => {
          dispatch(handleCategoriesData(payload));
      })}
  
      const handleCategoriesData = (payload) => {
          return { type: actionTypes.RENETAL_CATEGORIES, data: payload };
      }

      export const subcategoryAction = (payload) => {
        return (dispatch => {
            dispatch(handleSubCategoriesData(payload));
        })}
    
        const handleSubCategoriesData = (payload) => {
            return { type: actionTypes.RENETAL_SUB_CATEGORIES, data: payload };
        }
