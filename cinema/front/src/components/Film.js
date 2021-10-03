const Film = ({film}) => {
    // console.log('film', film);
    return (
        <tr className="film-row">
            <td>
                {film.id}
            </td>
            <td>
                {film.title}
            </td>
            <td>
                {film.description}
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
