import HeroesList from "../heroesList/HeroesList"
import HeroesAddForm from "../heroesAddForm/HeroesAddForm"
import HeroesFilters from "../heroesFilters/heroesFilters"

import "./app.scss"

const App = () => {
    return(
        <main className="app">
            <HeroesList/>
            <div className="content__interactive">
                <HeroesAddForm/>
                <HeroesFilters/>
            </div>
        </main>
    )
}

export default App
