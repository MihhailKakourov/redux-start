const HeroesListItem = ({name, description, element, onDelete}) => {
    let elementClassName;

    switch (element) {
        case "fire":
            elementClassName = "bg-danger bg-gradiend";
            break;
        case "water":
            elementClassName = "bg-primary bg-gradiend";
            break;
        case "wind":
            elementClassName = "bg-success bg-gradiend";
            break;
        case "earth":
            elementClassName = "bg-secondary bg-gradiend";
            break;
        default:
            elementClassName = "bg-warning bg-gradiend";
    }

    return (
        <li
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
                className="img-fluid w-25 d-inline"
                alt="unknown hero"
                style={{objectFit: "cover"}}
            />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span onClick={onDelete} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light">
                <button
                type="button"
                className="btn-close"
                aria-label="Close"
                ></button>
            </span>
        </li>
    )
    
}

export default HeroesListItem