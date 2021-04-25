import React from 'react';
import GlobalHeader from '../globalHeader';
import {dashboardViewName} from '../../constants';
import  './landScreen.css';

export default function LandingScreen(props) {
    return (
        <div>
            <GlobalHeader {...props}/>
            <div className='dashboardContainer'>
                <div >
                    <h3>{dashboardViewName.WELCOMETO}</h3>
                    <h3>{dashboardViewName.WELCOMESEONDHALF}</h3>
                    <h5>{dashboardViewName.SELECTLOCATION}</h5>
                </div>
            </div>
        </div>
    );
}
