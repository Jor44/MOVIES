import hateful from '../../assets/images/hateful.jpg';
import shawshank from '../../assets/images/shawshank.jpg';
import happy from '../../assets/images/happy.jpg';
import gladiator from '../../assets/images/gladiator.jpg';
import apocalipto from '../../assets/images/apocalipto.jpg';
import nobody from '../../assets/images/nobody.jpg';
import it from '../../assets/images/it.jpg';
import others from '../../assets/images/others.jpg';
import getout from '../../assets/images/getout.jpg';
import ryan from '../../assets/images/ryan.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const Movies = () => {
    const [movieList, setList] = useState([
        { name: 'The Hateful Eight', year: '2015', genre: 'western', image: hateful, id: '1', comm:[] },
        { name: 'The Shawshank Redemption', year: '1994', genre: 'drama', image: shawshank, id: '2', comm:[] },
        { name: 'The Pursuit Of Happyness', year: '2006', genre: 'drama', image: happy, id: '3', comm:[] },
        { name: 'Gladiator', year: '2000', genre: 'history', image: gladiator, id: '4', comm:[] },
        { name: 'Apocalipto', year: '2006', genre: 'thriller', image: apocalipto, id: '5', comm:[] },
        { name: 'Nobody', year: '2017', genre: 'thriller', image: nobody, id: '6', comm:[] },
        { name: 'It', year: '2017', genre: 'horror', image: it, id: '7', comm:[] },
        { name: 'Others', year: '2001', genre: 'horror', image: others, id: '8', comm:[] },
        { name: 'Get Out', year: '2017', genre: 'horror', image: getout, id: '9', comm:[] },
        { name: 'Saving Private Ryan', year: '1998', genre: 'thriller', image: ryan, id: '10', comm:[] }
    ])

    const [comm, setComm] = useState();
    const [show, setShow] = useState(null);
    const [com, setCom] = useState();

    const addComent = (e) => {
        setCom(e.target.value);
    }

    const addClick = () => {
        setComm(com)
        setShow(null)
    }

    const navigate = useNavigate()

    return (
        <div className='main-div'>
            {
                movieList.map((i) => {
                    return (
                       
                        <div onClick={() => setShow(i.id)} key={i.id} className='container'>
                            <img alt='pic1' src={i.image} />
                            <div>
                                <h2>{i.name}</h2>
                                <div className='p-div'>
                                    <p>{i.year}</p>
                                    <p>{i.genre}</p>
                                    <p style={{ color: 'crimson' }}><b>{comm}</b></p>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }

            {show &&
                <form onSubmit={() => setShow(null)} className='modal'>
                    <div className='modal-cnt'>
                        <input onChange={addComent} className='modal-input' type="text" placeholder={'comment'} />
                        <button className='add-btn' onClick={addClick}>ADD</button>
                        <button className='close-btn'> X </button>
                    </div>
                </form>
            }
        </div>
    )
}