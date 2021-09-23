const Film = ({film}) => {
    console.log('film', film);
    return (
        <tr className="film-row">
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
    console.log('films', films);
    return (
        <table className={"film-list"}>
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {films.map((film) => <Film key={film.title} film={film}/>)}
            </tbody>
        </table>
    )
}

export default FilmList;
