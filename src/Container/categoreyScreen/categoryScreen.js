import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import GlobalHeader from '../globalHeader';
import Card from '../../component/card/';
import {subcategoryAction} from '../../actions';
import {handleImages} from '../../constants';
import './categories.css';

export default function CategoryScreen(props) {
    const [categoriesState, setCategoriesState] = useState(null);

    const dispatch = useDispatch();
    const categories = useSelector((storeState) => storeState.rentalDataReducer.categories);

    useEffect(()=> {
        if(categories){
          setCategoriesState(categories);
        }
      }, [ categories])

    const handleSubCategory = (subCategoryItem) => {
      dispatch(subcategoryAction(subCategoryItem));
      props.history.push('/SubCategoryScreen');
    } 

    return (
        <div>  
            <GlobalHeader {...props}/>
            <div className='flexContainer'>
                {categoriesState && categoriesState.map((item, index) => (
                    <Card key={index.toString()}  src={handleImages(item.image)} handleClick={ () => handleSubCategory(item.subcategories)} name={item.name} className='card'/>))}
            </div>
        </div>
    );
}

CategoryScreen.propTypes = {
    history: PropTypes.object
};
  
