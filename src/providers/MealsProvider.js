import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Bake Beans", "Baked Sweet Potatoes", "Baked Potatoes"]

const MealsProvider = ({children}) => {

    const [meals, setMealslist] = React.useState(todaysMeals)

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}


export const useMealsListContext = () => React.useContext

export default MealsProvider