import  React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingScreen from './landScreen/landingScreen';
import CategoryScreen from './categoreyScreen/categoryScreen';
import SubCategoryScreen from './categoreyScreen/subCategory';
import Footer from '../component/footer';

function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/" exact   component={LandingScreen} />
            <Route path="/CategoryScreen" exact   component={CategoryScreen} />
            <Route path="/SubCategoryScreen" exact   component={SubCategoryScreen} />
          </Switch>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default Routes;