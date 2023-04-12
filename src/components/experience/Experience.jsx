import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'
export default function Experience() {
  return (
    <section id='experience'>
        <h5>Skills I Have</h5>
        <h2>Experience</h2>
        <div className="experience_cnt container">
            <div className='exp_frontend'>
                <h3>Frontend Development</h3>
                <div className='exp_txt'>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div>
                        <h4>Html</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div>
                        <h4>Bootstrap </h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div>
                        <h4>Tailwind</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='exp_backend'>
            <div className='exp_frontend'>
                <h3>Backend Development</h3>
                <div className='exp_txt'>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div><h4>Node Js</h4>
                        <small className='text-light'>Experienced</small></div>
                    </article>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div>
                        <h4>Php</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/>
                        <div>
                        <h4>MySQL </h4>
                        <small className='text-light'>Basic</small>
                        </div>
                    </article>
                    <article className='exp_details'>
                        <BsPatchCheckFill className='exp_details_icon'/> 
                        <div>
                        <h4>Python</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
