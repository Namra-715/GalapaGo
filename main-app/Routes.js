import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import Favorites from "./screens/favorites/Favorites"

//home imports
import Home from "./screens/Home/home";
import RelevantInformation from "./screens/Home/RelevantInformation";
import Maps from "./screens/Home/Maps";
import Overview from "./screens/Home/Overview";

//LearnSection imports
import Learn from "./screens/learn/Learn";
import AboutUs from "./screens/learn/AboutUs";
import History from "./screens/learn/history/History";
import People from "./screens/learn/history/People";
import Timeline from "./screens/learn/history/Timeline";
import Fauna from "./screens/learn/science/Fauna";
import Flora from "./screens/learn/science/Flora";
import NewSpecies from "./screens/learn/science/NewSpecies";
import Protect from "./screens/learn/science/Protect";
import ScienceAndSus from "./screens/learn/science/ScienceAndSus";
import EndangeredSpecies from "./screens/learn/science/EndangeredSpecies";

//ExploreSection imports
import Explore from "./screens/explore/Explore";
import KnowBefore from "./screens/explore/know/KnowBefore";
import Language from "./screens/explore/know/Language";
import Customs from "./screens/explore/know/Customs";
import Rules from "./screens/explore/know/Rules";
import Plan from "./screens/explore/plan/Plan";
import TravelAgencies from "./screens/explore/plan/TravelAgencies";
import IslandHop from "./screens/explore/plan/IslandHop";

import TopActivities from "./screens/explore/plan/TopActivities";
import Cycling from "./screens/explore/plan/activities/Cycling";
import Camping from "./screens/explore/plan/activities/Camping";
import Hiking from "./screens/explore/plan/activities/Hiking";
import Cruise from "./screens/explore/plan/activities/Cruise";
import Diving from "./screens/explore/plan/activities/Diving";
import Surfing from "./screens/explore/plan/activities/Surfing";
import Kayaking from "./screens/explore/plan/activities/Kayaking";
import Fishing from "./screens/explore/plan/activities/Fishing";

import SantaCruz from "./screens/explore/plan/santaCruz/SantaCruz";
import SantaCruzFood from "./screens/explore/plan/santaCruz/SantaCruzFood";
import SantaCruzHotels from "./screens/explore/plan/santaCruz/SantaCruzHotels";
import showMap from "./screens/Home/IslandMaps/showMap";

// Island Hop imports
/*import IslandHop from "./screens/explore/plan/islandHop/IslandHop";
import Floreana from "./screens/explore/plan/islandHop/floreana/Floreana";
import FloreanaFood from "./screens/explore/plan/islandHop/floreana/FloreanaFood";
import FloreanaHotels from "./screens/explore/plan/islandHop/floreana/FloreanaHotels";
import FloreanaTop from "./screens/explore/plan/islandHop/floreana/FloreanaTop";

import Isabela from "./screens/explore/plan/islandHop/isabela/Isabela";
import IsabelaFood from "./screens/explore/plan/islandHop/isabela/IsabelaFood";
import IsabelaHotels from "./screens/explore/plan/islandHop/isabela/IsabelaHotels";
import IsabelaTop from "./screens/explore/plan/islandHop/isabela/IsabelaTop";

import SanCristobal from "./screens/explore/plan/islandHop/sanCristobal/SanCristobal";
import SanCristobalFood from "./screens/explore/plan/islandHop/sanCristobal/SanCristobalFood";
import SanCristobalHotels from "./screens/explore/plan/islandHop/sanCristobal/SanCristobalHotels";
import SanCristobalTop from "./screens/explore/plan/islandHop/sanCristobal/SanCristobalTop";

import SantaCruz from "./screens/explore/plan/islandHop/santaCruz/SantaCruz";
import SantaCruzFood from "./screens/explore/plan/islandHop/santaCruz/SantaCruzFood";
import SantaCruzHotels from "./screens/explore/plan/islandHop/santaCruz/SantaCruzHotels";
import SantaCruzTop from "./screens/explore/plan/islandHop/santaCruz/SantaCruzTop";
*/

const HomeSection = createStackNavigator({
    Home: { screen: Home },
    RelevantInformation:{screen: RelevantInformation },
    Maps: {screen: Maps},
    Overview: {screen: Overview},
    showMap: {screen: showMap}
});

HomeSection.navigationOptions = ({ navigation }) => {
    return {
        tabBarLabel: "Home",
        transparentHeader: {
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0
        },
        tabBarIcon: ({tintcolor}) => (
            <Image
                source={require('./app/assets/icons/turtle-1.png')}
                style={{width: 30, height: 30}}
            />
        )
    };
};

const LearnSection = createStackNavigator({
    Learn: { screen: Learn },
    AboutUs:{screen: AboutUs },
    History: {screen: History},
    People: {screen: People},
    Timeline: {screen: Timeline},
    ScienceAndSus: {screen: ScienceAndSus},
    Fauna : {screen: Fauna},
    Flora : {screen: Flora},
    NewSpecies: {screen: NewSpecies},
    Protect : {screen: Protect},
    EndangeredSpecies : {screen: EndangeredSpecies}
});

LearnSection.navigationOptions = ({ navigation }) => {
    return {
        tabBarLabel: "Learn",
        tabBarIcon: ({tintcolor}) => (
            <Image
                source={require('./app/assets/icons/bulb.png')}
                style={{width: 30, height: 30}}
            />
        )
    };
};

const ExploreSection = createStackNavigator({
    Explore: {screen: Explore},
    KnowBefore : {screen: KnowBefore},
    Language : {screen: Language},
    Customs : {screen: Customs},
    Rules : {screen: Rules},
    Plan : {screen: Plan},
    TravelAgencies : {screen: TravelAgencies},
    IslandHop : {screen: IslandHop},
    TopActivities: {screen: TopActivities},
    Cycling: {screen: Cycling},
    Camping: {screen: Camping},
    Hiking: {screen: Hiking},
    Cruise: {screen: Cruise},
    Diving: {screen: Diving},
    Surfing: {screen: Surfing},
    Kayaking: {screen: Kayaking},
    Fishing: {screen: Fishing},
    /*
    Floreana:{screen: Floreana},
    FloreanaFood: {screen: FloreanaFood},
    FloreanaHotels:{screen:FloreanaHotels},
    FloreanaTop: {screen: FloreanaTop},
    Isabela: {screen: Isabela},
    IsabelaFood : {screen: IsabelaFood},
    IsabelaHotels:{screen: IsabelaHotels},
    IsabelaTop: {screen: IsabelaTop},
    SanCristobal: {screen:SanCristobal},
    SanCristobalFood: {screen: SanCristobalFood},
    SanCristobalHotels: {screen: SanCristobalHotels},
    SanCristobalTop: {screen: SanCristobalTop},
    */
    SantaCruz: {screen: SantaCruz},
    SantaCruzFood: {screen: SantaCruzFood},
    SantaCruzHotels: {screen: SantaCruzHotels},
    /*
    SantaCruzTop: {screen: SantaCruzTop}
    */
});

ExploreSection.navigationOptions = ({navigation}) => {
    return{
        tabBarLabel: "Explore",
        tabBarIcon: ({tintcolor}) => (
            <Image
                source={require('./app/assets/icons/explore.png')}
                style={{width: 30, height: 30}}
            />
        )
    }
};

const FavoritesSection = createStackNavigator({
   Favorites : {screen: Favorites}
});

FavoritesSection.navigationOptions = ({navigation}) => {
    return{
        tabBarLabel: "Favorites",
        tabBarIcon: ({tintcolor}) => (
            <Image
                source={require('./app/assets/icons/heartlogo.png')}
                style={{width: 30, height: 30}}
            />
        )
    }
};

const TabNavigator = createBottomTabNavigator({
    Home: HomeSection,
    Learn: LearnSection,
    Explore: ExploreSection,
    Favorites: FavoritesSection
});

export default createAppContainer(TabNavigator)
