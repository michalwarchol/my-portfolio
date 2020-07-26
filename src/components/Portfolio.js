import React, {Component} from "react";
import * as Scroll from "react-scroll"
import PortfolioSite from "./PortfolioSite";
//import MWSecrets from "../img/MW SecretsOfMountains.png";
import MWTodolist from "../img/MW Todolist.png";
import MWeshop from "../img/MW Fandom.png";

let Element = Scroll.Element;

class Portfolio extends Component {

    componentWillUnmount(){
        window.scrollTo({top: 0, left: 0});
    }

    render(){
        return(
            <Element name="portfolio" className="portf d-flex justify-content-center align-items-start">
                <div className={"portfolio d-flex col-9 flex-column"}>
                    <h1 className={"col-12"}>Portfolio</h1>
                    <div className="d-flex col-12 flex-column flex-xl-row flex-wrap">
                        <PortfolioSite title={"Secrets of Mountains"} img={MWSecrets} external={true} link={"https://secretsofmountains.netlify.app"} gitLink={"https://github.com/michalwarchol/secretsofmountains"}/>
                        <PortfolioSite title={"Breaking Bad Fandom"} img={MWeshop} external={true} link={"http://breakingbadfandom.netlify.app"} gitLink={"https://github.com/michalwarchol/breakingbadfandom"}/>
                        <PortfolioSite title={"ToDoList"} img={MWTodolist} external={false} link={"/todolist"} gitLink={"https://github.com/michalwarchol/portfolio/tree/master/src/react/Todolist"}/>
                    </div>
                </div>
            </Element>
        )
    }
}

export default Portfolio;