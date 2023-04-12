import React from 'react'
import './portfolio.css'
export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_cnt">
                <article className='portfolio_item'>
                <div className="portfolio_item_img">
                    <img src='../assets/portfolio1.jpg' alt='project'/>
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio_btn'>
                <a href='https://github.com' target='_blank'>Github</a>
                <a href='https://github.com' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio_item'>
                <div className="portfolio_item_img">
                    <img src='../assets/portfolio2.jpg' alt='project'/>
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio_btn'>
                <a href='https://github.com' target='_blank'>Github</a>
                <a href='https://github.com' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio_item'>
                <div className="portfolio_item_img">
                    <img src='../assets/portfolio3.jpg' alt='project'/>
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio_btn'>
                <a href='https://github.com' target='_blank'>Github</a>
                <a href='https://github.com' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio_item'>
                <div className="portfolio_item_img">
                    <img src='../assets/portfolio4.jpg' alt='project'/>
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio_btn'>
                <a href='https://github.com' target='_blank'>Github</a>
                <a href='https://github.com' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio_item'>
                <div className="portfolio_item_img">
                    <img src='../assets/portfolio5.png' alt='project'/>
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio_btn'>
                <a href='https://github.com' target='_blank'>Github</a>
                <a href='https://github.com' target='_blank'>Live Demo</a>
                </div>
                </article>
                <article className='portfolio_item'>
                <div className="portfolio_item_img">
                    <img src='../assets/portfolio6.jpg' alt='project'/>
                </div>
                <h3>This is a portfolio item title</h3>
                <div className='portfolio_btn'>
                <a href='https://github.com' target='_blank'>Github</a>
                <a href='https://github.com' target='_blank'>Live Demo</a>
                </div>
                </article>
            </div>
        </section>
    )
}
