import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import GlobalHeader from '../globalHeader';
import Card from '../../component/card/';
import {
    handleImages
  } from '../../constants';

export default function SubCategory(props) {
    const [subCategoriesState, setSubCategoriesState] = useState(null);

    const subCategories = useSelector((storeState) => storeState.rentalDataReducer.subCategories);

    useEffect(()=> {
        if(subCategories){
            setSubCategoriesState(subCategories);
        }
      }, [ subCategories])
console.log(subCategoriesState, 'subCategoriesState');

    return (
        <div>
              <GlobalHeader {...props}/>
              <div className='flexContainer'>
                {subCategoriesState && subCategoriesState.map((item, index) => (
                    <Card key={index.toString()}  src={handleImages(item.image)}  name={item.name} className='card'/>))}
            </div>
        </div>
    );
}
