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

const movieList = [
    { name: 'The Hateful Eight', year: '2015', genre: 'western', image: hateful, id: '1' },
    { name: 'The Shawshank Redemption', year: '1994', genre: 'drama', image: shawshank, id: '2' },
    { name: 'The Pursuit Of Happyness', year: '2006', genre: 'drama', image: happy, id: '3' },
    { name: 'Gladiator', year: '2000', genre: 'history', image: gladiator, id: '4' },
    { name: 'Apocalipto', year: '2006', genre: 'thriller', image: apocalipto, id: '5' },
    { name: 'Nobody', year: '2017', genre: 'thriller', image: nobody, id: '6' },
    { name: 'It', year: '2017', genre: 'horror', image: it, id: '7' },
    { name: 'Others', year: '2001', genre: 'horror', image: others, id: '8' },
    { name: 'Get Out', year: '2017', genre: 'horror', image: getout, id: '9' },
    { name: 'Saving Private Ryan', year: '1998', genre: 'thriller', image: ryan, id: '10' }
]

export const Movies = () => {

    const [show, setShow] = useState(null);
    const [com, setCom] = useState();

    const addComent = (e) => {
        setCom(e.target.value);
    }

    const addClick = () => {
        setShow(null)
    }

    return (
        <div className='main-div'>
            {
                movieList.map((i) => {
                    return (
                        <div key={i.id} onClick={() => setShow(i.id)} className='container'>
                            <img alt='pic1' src={i.image} />
                            <div>
                                <h2>{i.name}</h2>
                                <div className='p-div'>
                                    <p>{i.year}</p>
                                    <p>{i.genre}</p>
                                    <b style={{ color: 'crimson' }}>{com}</b>
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