import React, { useState } from 'react'
import '../assets/styles/flipCard.css'
import ReactCardFlip from 'react-card-flip'
import data from '../data.json'

const mediaData = data.languages

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <div className='card front' onMouseEnter={handleClick}>
        <img src={props.photo} alt='profile-img' className='w-full h-full' />
      </div>

      <div className='card leading-7 text-sm' onMouseLeave={handleClick}>
        <div className='back-code pl-5 pt-2 pb-2'>
          <span className='dot h-4 w-4 mt-3 mx-1 mb-1 rounded-full inline-block'></span>
          <span className='dot h-4 w-4 mt-3 mx-1 mb-1 rounded-full inline-block'></span>
          <span className='dot h-4 w-4 mt-3 mx-1 mb-1 rounded-full inline-block'></span>
          <pre>
            <span className='var'>var</span> card = &#123;
            <br />
            <span className='key'>"name":</span>{' '}
            <span className='value'>"{props.name}",</span>
            <br />
            <span className='key'>"github_username":</span>{' '}
            <span className='value'>"{props.github_username}",</span>
            <br />
            <span className='key'>"position":</span>{' '}
            <span className='value'>"{props.position}",</span>
            <br />
            <span className='key'>"contry":</span>{' '}
            <span className='value'>"{props.country}",</span>
            <br />
            <span className='key'>"city":</span>{' '}
            <span className='value'>"{props.city}",</span>
            <br />
            <span className='key'>"favorite_language":</span>{' '}
            <span className='value'>"{props.language}"</span>
            <br />
            &#125;
          </pre>
        </div>
        <div className='footer-card flex flex-col'>
          <a
            className='flex mt-3 ml-3'
            target='_blank'
            rel='noopener noreferrer'
            href={`https://github.com/${props.github_username}`}
          >
            <img
              className='w-8'
              src='https://res.cloudinary.com/dargjxuh5/image/upload/v1574695301/logos/github_desktop_ggqdlv.svg'
              alt='github-icon'
            />
            <span className='text-xl font-semibold text-black mt-5 pb-2'>
              {props.name}
            </span>
          </a>

          <p className='w-1/2 ml-3 mt-3 bg-gray-200 rounded-full text-sm font-semibold text-gray-700'>
            #Hacktoberfest_2020
          </p>

          <div className='flex justify-end'>
            {mediaData.map((item, index) => (
              <img
                src={item[props.language.toLowerCase()]}
                key={index}
                alt='language-img'
                className='w-8 mt-2 mb-2 mr-3'
              />
            ))}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  )
}

export default Card
