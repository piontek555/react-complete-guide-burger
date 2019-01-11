import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const burger = (props) => {
    let tansformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        console.log(tansformedIngredients);
        if(tansformedIngredients.length === 0) {
            tansformedIngredients = <p>Please add Ingredients</p>
        }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tansformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;