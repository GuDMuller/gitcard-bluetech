import Card from "./Card";

function CardList({ profiles }) {
    return (
        <ul className="c-cards">
            {profiles.map((profile, index) => {
                return (
                    <li key={index} className="c-cards__item">
                        <Card {...profile} />
                    </li>
                )
            })}
        </ul>
    );
}

export default CardList;