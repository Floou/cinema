import React from "react";
import {useParams} from "react-router";

const FilmDetail = ({films}) => {
    let {id} = useParams();
    console.log('id:',id);
    console.log('films:',films);
    return (
        <h3>Film</h3>
    )
}

export default FilmDetail;
