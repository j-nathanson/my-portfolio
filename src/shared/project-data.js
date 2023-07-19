import freeUp from '../assets/images/freeUp.png'
import dreamy from '../assets/images/dreamy.png'
import banhmi from '../assets/images/banh-mi-mama.png'
import foodies from '../assets/images/foodies.png'
import portfolio from '../assets/images/portfolio.png'
import descriptify from '../assets/images/descriptify.png'
import scraibe from '../assets/images/scraibe.png'

export const PROJECT_DATA = [
    {
        title: 'Scr-ai-be - ai note organizer',
        img: scraibe,
        description: 'Java - React - Tailwind',
        gitUrl: 'https://github.com/j-nathanson/scraibe/tree/main',
        liveUrl: 'http://scraibeclient.s3-website.us-east-2.amazonaws.com/'
    },
    {
        title: 'FreeUp - a donator app',
        img: freeUp,
        description: 'PostgresSQL - React - MUI',
        gitUrl: 'https://github.com/FreeUp-CoLab',
        liveUrl: 'https://freeupnyc.netlify.app/'
    },
    {
        title: 'Descriptify - product describer',
        img: descriptify,
        description: 'React  - Redux Toolkit - Bootstrap',
        gitUrl: 'https://github.com/j-nathanson/openai-descriptify',
        liveUrl: 'https://descriptify.netlify.app/',
    },
    {
        title: 'Dreamy - a dream journal app',
        img: dreamy,
        description: 'MERN - JSON Web Token - Google oauth',
        gitUrl: 'https://github.com/orgs/Dreamy-Journal/repositories',
        liveUrl: 'https://dreamy-journal.netlify.app/'
    },
    {
        title: 'Banh mi mama - a food ordering app',
        img: banhmi,
        description: 'React Native - Redux Toolkit - React Hook Form',
        gitUrl: 'https://github.com/j-nathanson/banh-mi-mama',
        liveUrl: ''
    },
    {
        title: 'My Portfolio page',
        img: portfolio,
        description: 'React  - SCSS',
        gitUrl: 'https://github.com/j-nathanson/my-portfolio',
        liveUrl: 'https://portfolio-jacob-nathanson.herokuapp.com',
    },
]