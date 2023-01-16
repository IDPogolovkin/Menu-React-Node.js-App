import React from 'react'
import style from '../styles/footerSec.css'

const FooterSec = () => {
  return (
    <section class="footer">
    <link rel="stylesheet" href={style} />
        <div class="box-container">

            <div class="box">
                <h3>locations</h3>
                <a href="#">japan</a>
                <a href="#">russia</a>
                <a href="#">USA</a>
                <a href="#">france</a>
            </div>

            <div class="box">
                <h3>quick links</h3>
                <a href="#">dishes</a>
                <a href="#">about</a>
                <a href="#">menu</a>
                <a href="#">reivew</a>
            </div>

            <div class="box">
                <h3>contact info</h3>
                <a href="#">+7-776-134-4060</a>
                <a href="#">+7-708-750-5002</a>
                <a href="#">daniilpogolovkin@gmail.com</a>
            </div>

            <div class="box">
                <h3>follow us</h3>
                <a href="#">facebook</a>
                <a href="#">twitter</a>
                <a href="#">instagram</a>
                <a href="#">linkedin</a>
            </div>

        </div>

    <div class="credit">2023 @<span> by Daniil Pogolovkin</span> </div>

</section>
  )
}

export default FooterSec