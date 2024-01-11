import React from 'react'
import { Grid } from '@mantine/core';
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import classes from './Home.module.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Profilepic from '../../assets/picture.jpg'
import { useStore } from '../../store/store';
function Home() {
    const {details} = useStore()
    const [text] = useTypewriter({
        words: [' Full Stack Developer'],
        loop: true
    })
    return (
        <div className={classes.page_container}>
            <Grid>
                <Grid.Col span={6} className={classes.content}>
                    <div className={classes.inner}>
                        <h3 style={{ color: '#ffd43b' }}>Hello, I'm</h3>
                        <h1>Prasanna G</h1>
                        <h3 style={{ color: '#909296' }}>And I'm a
                            <span style={{ color: '#ffd43b' }}>{text}</span>
                            <Cursor cursorColor='white' />
                        </h3>
                        <p>Looking to join in an organization that provide me to learn new skill sets for growth of the company as well as me in the challenging environment.
                        </p>
                    </div>
                    <div className={classes.icons}>
                        <a className={classes.socialmediaicons} href={details.linkedin}><IoLogoLinkedin size={25} className={classes.linkedin}/></a>
                        <a className={classes.socialmediaicons} href={details.leetcode} ><SiLeetcode size={25}  className={classes.leetcode}/></a>
                        <a className={classes.socialmediaicons} href={details.github}><FaGithub size={25}  className={classes.github}/></a>
                        <a className={classes.socialmediaicons} href={details.instagram}><FaInstagram size={25} className={classes.instagram} /></a>
                    </div>
                </Grid.Col>
                <Grid.Col span={6} className={classes.image}>
                    <img src={Profilepic} className={classes.profilepic}></img>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default Home