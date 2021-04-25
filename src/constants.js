
import booms from './assets/category/booms.png';
import carry_deck_crane from './assets/category/carry_deck_crane.png';
import earth_moving from './assets/category/earth_moving.png';
import forklifts from './assets/category/forklifts.png';
import material_lifts from './assets/category/material_lifts.png';
import personnel_cart from './assets/category/personnel_cart.png';
import scissor_lifts from './assets/category/scissor_lifts.png';
import single_man_lifts from './assets/category/single_man_lifts.png';
import telehandlers from './assets/category/telehandlers.png';
import booms_articulated_electric from './assets/category/subcategory/booms_articulated_electric.png';
import booms_articulated_engine from './assets/category/subcategory/booms_articulated_engine.png';
import booms_straight from './assets/category/subcategory/booms_straight.png';
import booms_towable from './assets/category/subcategory/booms_towable.png';
import earth_moving_backhoe from './assets/category/subcategory/earth_moving_backhoe.png';
import earth_moving_compact_truck_loader from './assets/category/subcategory/earth_moving_compact_truck_loader.png';
import earth_moving_mini_excavator from './assets/category/subcategory/earth_moving_mini_excavator.png';
import earth_moving_skid_steer from './assets/category/subcategory/earth_moving_skid_steer.png';
import forklift_electric from './assets/category/subcategory/forklift_electric.png';
import forklift_ic_pneumatic from './assets/category/subcategory/forklift_ic_pneumatic.png';
import forklift_piggyback from './assets/category/subcategory/forklift_piggyback.png';
import forklift_rough_terrain from './assets/category/subcategory/forklift_rough_terrain.png';
import forklift_swingmast from './assets/category/subcategory/forklift_swingmast.png';
import forklift_tugger from './assets/category/subcategory/forklift_tugger.png';
import forklifts_ic_cushion from './assets/category/subcategory/forklifts_ic_cushion.png';
import personnel_cart_rough_terrain from './assets/category/subcategory/personnel_cart_rough_terrain.png';
import scissor_lift_rough_terrain from './assets/category/subcategory/scissor_lift_rough_terrain.png';
import scissor_lift_slab from './assets/category/subcategory/scissor_lift_slab.png';
import single_man_lifts_driveable from './assets/category/subcategory/single_man_lifts_driveable.png';
import single_man_lifts_push_around from './assets/category/subcategory/single_man_lifts_push_around.png';


export const actionTypes = {
    RENETAL_RESPONSE: 'RENETAL_RESPONSE',
    RENETAL_CATEGORIES: 'RENETAL_CATEGORIES',
    RENETAL_SUB_CATEGORIES: 'RENETAL_SUB_CATEGORIES'
}

export const dashboardViewName = {
    RENTALMANAMENTSYSTEM : 'RENTAL MANAGEMENT SYSTEM',
    WELCOMETO: 'WELCOME TO',
    WELCOMESEONDHALF:' RENTAL MANAGEMENT SYSTEM',
    SELECTLOCATION:'Please select location',
    BANNERMANAGEMENT: 'Banner Management',
    EQUIPMENTCATALOG:'Equipment Catalog'
}


export const handleImages = function(type){
    switch (type) {
        case 'booms.png':
            return booms;
        case 'carry_deck_crane.png':
            return carry_deck_crane;
        case 'earth_moving.png':
            return earth_moving;
        case 'forklifts.png':
            return forklifts;
        case 'material_lifts.png':
            return material_lifts;
        case 'personnel_cart.png':
            return personnel_cart;
        case 'scissor_lifts.png':
            return scissor_lifts;
        case 'single_man_lifts.png':
            return single_man_lifts;
        case 'telehandlers.png':
            return telehandlers;
        case 'booms_articulated_electric.png':
            return booms_articulated_electric;
        case 'booms_articulated_engine.png':
            return booms_articulated_engine;
        case 'booms_straight.png':
            return booms_straight;
        case 'booms_towable.png':
            return booms_towable;
        case 'earth_moving_backhoe.png':
            return earth_moving_backhoe;
        case 'earth_moving_compact_truck_loader.png':
            return earth_moving_compact_truck_loader;
        case 'earth_moving_mini_excavator.png':
            return earth_moving_mini_excavator;                               
        case 'earth_moving_skid_steer.png':
            return earth_moving_skid_steer; 
        case 'forklift_electric.png':
            return forklift_electric; 
        case 'forklift_ic_pneumatic.png':
            return forklift_ic_pneumatic; 
        case 'forklift_piggyback.png':
            return forklift_piggyback; 
        case 'forklift_rough_terrain.png':
            return forklift_rough_terrain; 
        case 'forklift_swingmast.png':
            return forklift_swingmast; 
        case 'forklift_tugger.png':
            return forklift_tugger; 
        case 'forklift_ic_cushion.png':
            return forklifts_ic_cushion; 
        case 'personnel_cart_rough_terrain.png':
            return personnel_cart_rough_terrain; 
        case 'scissor_lift_rough_terrain.png':
            return scissor_lift_rough_terrain; 
        case 'scissor_lift_slab.png':
            return scissor_lift_slab; 
        case 'single_man_lifts_driveable.png':
            return single_man_lifts_driveable;  
        case 'single_man_lifts_push_around.png':
            return single_man_lifts_push_around; 
                                          
        }
};