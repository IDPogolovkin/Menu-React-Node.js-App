import React from 'react'
import style from '../styles/dishes.css'

const Deserts = (props) => {

  let badgeText
  if (props.products === 0){
      badgeText = 'Выберите другое блюдо'
  }
  else if (props.sale === 1){
      badgeText = 'АКЦИЯ'
  }

  const [isShown, setIsShown] = React.useState(false)

  function toggleShown(){
      setIsShown(prevShown=>!prevShown)
  }

  return (
    <div>
        <link rel="stylesheet" href={style}></link>
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            {/* <img src={`data:image/jpeg;base64,${props.coverImg}`} className="card--image" /> */}
            <img src='https://images.pexels.com/photos/5419205/pexels-photo-5419205.jpeg?auto=compress&cs=tinysrgb&w=800' className="card--image" />
            <div className="card--stats">
                <img src={props.img} className="card--star" />
                <span>{}</span>
                <span className="gray">({props.rating}) • </span>
                {badgeText ? <span className="gray">{badgeText}</span> : <span className="gray">{props.location}</span>}
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
            {isShown && <p className='desc'>{props.description}</p>}

            <button className='showBtn' onClick={toggleShown}>Подробнее</button>
        </div>
    </div>
  )
}

export default Deserts