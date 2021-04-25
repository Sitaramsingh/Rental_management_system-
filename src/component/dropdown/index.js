import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Index(props) {
    const [isOpen, setIsOPen] = useState(false);
   
    const handleClick = () => {
        setIsOPen(!isOpen);
    };

    const handleSubMenu = (categories) => {
        props.handleCategory(categories);
        props.handleNavigation();
    }
    
    const {catalogData} = props;
    
    return (
        <div
            className={isOpen ? "dropdown active" : "dropdown"}
            onClick={handleClick} >
            <div className="dropdown__text">
                {props.value}
            </div>
            <ul className="dropdown__items">
                {catalogData && catalogData.map((item, index) => (
                    <li key={item.cell1} className='menu'>
                        <div
                            className="dropdown__item"
                            key={item.toString()}>
                            {item.cell2}
                        </div>
                        <ul> 
                        {item.cell4 && item.cell4.map(subMenuItem => (
                            <li key={subMenuItem.subMenuCell1} className='submenu'><div onClick={() => handleSubMenu(subMenuItem.subMenuCell3)}>{subMenuItem.subMenuCell2}</div></li>
                        ))}
                        </ul>
                   </li>
                ))}
            </ul>
        </div>
    );
}

Index.propTypes = {
    value: PropTypes.string,
    catalogData: PropTypes.array,
    handleCategory: PropTypes.func,
    handleHeaderNavigation: PropTypes.func,
    handleNavigation: PropTypes.func
}

