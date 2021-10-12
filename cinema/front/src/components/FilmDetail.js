import React from "react";
import {useParams} from "react-router";

const FilmDetail = ({films}) => {
    let {id} = useParams();
    // console.log('id:',id, typeof id, typeof parseInt(id), typeof +id);
    let film = films.filter((item) => item.id === +id)[0];
    console.log('this film:', film);

    return (
        <h3>Film</h3>
    )
}

export default FilmDetail;
