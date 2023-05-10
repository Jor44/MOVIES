import { useNavigate } from "react-router"

export const Landing = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/login')
    }


    return (
        <div className="landing-div">
            <button onClick={handleClick} className="landing-btn">
                Click to continue
            </button>
        </div>
    )
}