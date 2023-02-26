import { Fragment } from "react/cjs/react.production.min";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg"

import classes from "./Header.module.css"

const Header = props =>{
    return (
        <Fragment>
            <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShownCart}/>
            </header>

            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="meals" />
            </div>


        </Fragment>



    )


}

export default Header;