import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Planet from './planet';

const clickPlanet = (name) => {
    console.log(`Um clique em ${name}`)
}

//criando componente de classe
class Planets extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            planets: [
            {
                name:"Mercúrio",
                img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
                description:"Descrição",
                link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwii18bQ4J31AhXIEbkGHRVdCAUQFnoECBkQAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FMerc%25C3%25BArio_(planeta)&usg=AOvVaw3R9UOYP7XhDJdOal_u1f6i",
            },
            {
                name:"Plutao",
                img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/220px-Pluto_in_True_Color_-_High-Res.jpg",
                description:"Descrição",
                link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwii18bQ4J31AhXIEbkGHRVdCAUQFnoECBkQAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FMerc%25C3%25BArio_(planeta)&usg=AOvVaw3R9UOYP7XhDJdOal_u1f6i",
            },
            {
                name:"ToRemove",
                img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/220px-Pluto_in_True_Color_-_High-Res.jpg",
                description:"Descrição",
                link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwii18bQ4J31AhXIEbkGHRVdCAUQFnoECBkQAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FMerc%25C3%25BArio_(planeta)&usg=AOvVaw3R9UOYP7XhDJdOal_u1f6i",
            }
                    ]
        }
    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render(){
        return(
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last Planet</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate Last Planet</button>
                <hr></hr>
                {this.state.planets.map((planet) => 
                    <Planet 
                        name={planet.name}
                        img_url={planet.img_url}
                        description={planet.description}
                        link={planet.link}
                        clickPlanet = {clickPlanet}
                        title_with_underline = {true}
                    />
                )}
                {/* <Planet name={this.state.planets[1].name}
                        img_url={this.state.planets[1].img_url}
                        description={this.state.planets[1].description}
                        link={this.state.planets[1].link}
                        clickPlanet = {clickPlanet}
                        title_with_underline = {true}
                /> */}
            </Fragment>
        )
    }

}

/* const Planets = () => {
    return(
        <Fragment>
            <h3>Planet List</h3>
            <hr></hr>
            <Planet name="Mercúrio"
                    desc="Lorem Ipsum"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
                    description="Descrição"
                    link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwii18bQ4J31AhXIEbkGHRVdCAUQFnoECBkQAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FMerc%25C3%25BArio_(planeta)&usg=AOvVaw3R9UOYP7XhDJdOal_u1f6i"
                    clickPlanet = {clickPlanet}
                    gray = {true}
            />
            <Planet name="Plutao"
                    desc="Lorem Ipsum"
                    img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/220px-Pluto_in_True_Color_-_High-Res.jpg"
                    description="Descrição"
                    link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwii18bQ4J31AhXIEbkGHRVdCAUQFnoECBkQAQ&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FMerc%25C3%25BArio_(planeta)&usg=AOvVaw3R9UOYP7XhDJdOal_u1f6i"
                    clickPlanet = {clickPlanet}
                    title_with_underline = {true}
            />
        </Fragment>
    )
} */

export default Planets;