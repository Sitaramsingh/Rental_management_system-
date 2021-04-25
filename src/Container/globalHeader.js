import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Dropdown from '../component/dropdown';
import Header from '../component/header';
import {dashboardViewName} from '../constants';
import {getCatalogData, categoryAction, } from '../actions';

export default function GlobalHeader(props) {
    const [catalogData, setCatalogData] = useState(null);

    const dispatch = useDispatch();
    const locationsData = useSelector((storeState) => storeState.rentalDataReducer.locations);
    
    useEffect(()=>{
      dispatch(getCatalogData());
    },[])

    useEffect(()=> {
      if(locationsData){
        setCatalogData(locationsData);
      }
      
    }, [locationsData])

      function createData(cell1, cell2, cell3, cell4) {
        return { cell1, cell2, cell3, cell4}
      }
    
      const handleLocationData = (data) => {
      if(data){
        return data.map(data => {
          const subMenu = data.branches.map(item => {
            return {subMenuCell1: item.branch_id,
            subMenuCell2: item.name,
            subMenuCell3: item.categories
          }})
            return createData(data.dealers_id, data.name, data.opco, subMenu);
        });
      }  
    
    };

    const handleCategory = (categoryItem) => {
      dispatch(categoryAction(categoryItem));
    } 

    const handleCategoryNavigation = () => {
        props.history.push('/CategoryScreen');
      } 
   
  return (
        <div>
            <Header title={dashboardViewName.RENTALMANAMENTSYSTEM}>
              <Dropdown value='Select location' catalogData={handleLocationData(catalogData)} handleCategory={handleCategory} handleNavigation={handleCategoryNavigation}/>
            </Header>
        </div>
    );
}

GlobalHeader.propTypes = {
  history: PropTypes.object
};


