import {useHttp} from "../../hooks/http.hook"
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import {v4 as uuidv4} from "uuid"

import { heroCreated } from "../../actions"

const HeroesAddForm = () => {
    const [heroName, setHeroName] = useState("");
    const [heroDescr, setHeroDescr] = useState("");
    const [heroElement, setHeroElement] = useState("");

    const {filters, filtersLoadingStatus} = useSelector(state => state.filters)
    const dispatch = useDispatch()
    const {request} = useHttp()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const newHero = {
            id: uuidv4(),
            name: heroName,
            description: heroDescr,
            element: heroElement
        }

        request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
            .then(res => console.log(res, "Success"))
            .then(dispatch(heroCreated(newHero)))
            .catch(err => console.log(err))
        
        setHeroName("")
        setHeroDescr("")
        setHeroElement("")
    }
    
    const renderFilters = (filters, status) =>{
        if (status === "loading"){
            return <option>Loading Elems</option>
        } else if (status === "error"){
            return <option>Error loading</option>
        }

        if (filters && filters.length > 0){
            return filters.map(({name, label}) => {
                if (name === "all") return null

                return <option key={name} value={name}>{label}</option>
            })
        }
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">New hero's name</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="How is your name?"
                    value={heroName}
                    onChange={(e) => setHeroName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4"></label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="What can i do?"
                    style={{"height": "130px"}}
                    value={heroDescr}
                    onChange={(e) => setHeroDescr(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="element" className="form-label">Pick hero's element</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={heroElement}
                    onChange={(e) => setHeroElement(e.target.value)}>
                    <option value="">I can...</option>
                    {renderFilters(filters, filtersLoadingStatus)}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default HeroesAddForm