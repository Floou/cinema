const Film = (film) => {
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

const FilmList = (props) => {
    console.log('props', props);
    return (
        <table className={"film-list"}>
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {[].map(Film)}
            </tbody>
        </table>
    )
}

export default FilmList;
