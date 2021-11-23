import React from 'react'

const css = `
  .ul{
    display:flex;
    justify-content:center;
    list-style: none;
  }
  .i {
      color:#F59E0B;
      margin-right:4px;
  }
`
interface Props {
  star: number | string
}

const Rating: React.FC<Props> = ({ star }) => {
  const int = parseInt(String(star))
  const decimal = +String(star).split('.')[1]

  return (
    <div>
      <ul className='ul'>
        {[...Array(int)].map((_, i) => (
          <li key={++i}>
            <i className='i fas fa-star fa-sm my-element'></i>
          </li>
        ))}

        {decimal === 5 && (
          <li key={decimal}>
            <i className='i fas fa-star-half-alt fa-sm'></i>
          </li>
        )}

        {+star <= 5 &&
          [...Array(5 - Math.ceil(+star))].map((_, i) => (
            <li key={++i}>
              <i className='i far fa-star fa-sm'></i>
            </li>
          ))}
      </ul>
      <style>{css}</style>
    </div>
  )
}

export default Rating

// there is font-awesome cdn
{
  /* <link
  rel='stylesheet'
  href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
  integrity='sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=='
  crossOrigin='anonymous'
  referrerPolicy='no-referrer'
/> */
}
