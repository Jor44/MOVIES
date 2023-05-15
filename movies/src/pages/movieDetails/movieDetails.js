import { useParams } from "react-router"

export const Details = ({ movieList }) => {
    const params = useParams()

    const currentMovie = movieList.find((i) => i.id === params.id)
    return (
        <div>
            <h1>{currentMovie.name} {currentMovie.year} {currentMovie.genre}</h1>
        </div>
    )
}