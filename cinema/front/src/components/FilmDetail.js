import React from "react";
import {useParams} from "react-router";

const FilmDetail = ({films,users}) => {
    let {id} = useParams();
    let film = films.filter((item) => item.id === +id)[0];
    let audience = users.filter((item) => film.audience.includes(item.id));

    return (
        <div className={"film-detail"}>
            <h3>Film: {film.title}</h3>
            <p>{film.description}</p>
            <p>Audience:</p>
            <ul>
                {audience.map((item) => (
                    <li key={item.id}>{item.username}</li>
                ))}
            </ul>
        </div>

    )
}

export default FilmDetail;
