import {NavLink as Link} from "react-router-dom";
import React from "react";

const Film = ({film}) => {
    // console.log('film', film);
    return (
        <tr className="film-row">
            <td>
                {film.id}
            </td>
            <td>
                <Link to={`/films/detail${film.id}`} className="nav-link">
                    {film.title}
                </Link>
            </td>
            <td>
                {film.description}
            </td>
            <td>
                <Link to={`/films/delete${film.id}`} className="nav-link">
                    delete
                </Link>
            </td>
        </tr>
    )
}

const FilmList = ({films}) => {
    // console.log('films', films);
    return (
        <div className={"film-list"}>
            <h1>Films</h1>
            <table className={"film-list"}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>actions</th>
                </tr>
                </thead>
                <tbody>
                {films.map((film) => <Film key={film.id} film={film}/>)}
                </tbody>
            </table>
        </div>
    )
}

export  default FilmList;
