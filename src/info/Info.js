import self from "../img/self.png"
import crypto from "../img/crypto.mp4"
import gym from "../img/gym.mp4"
import notes from "../img/notes.mp4"
import EngDic from "../img/english dictionary.mp4"
import PassGen from "../img/PasswordGen.mp4"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Shivanshu",
    lastName: "Shukla",
    initials: "SS", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Mern Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in india'
        },
        {
            emoji: "💼",
            text: "computer Science student "
        },
        {
            emoji: "📧",
            text: "shivanshushukla2022@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://www.instagram.com/shiv_anshu_shukla/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/SHIVANSHU-TECH",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/shivanshu-shukla-a7a81818a/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.youtube.com/channel/UC3VQ3vodM3LkMVnVz-GtFaQ",
            icon: "fa fa-youtube",
            label: 'youtube'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! Myself Shivanshu, a passionate MERN stack developer 💻 pursuing a Bachelor's degree in Computer Science Engineering from Delhi Technical Campus and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'next js','java', 'c++' ],
            exposedTo: ['nodejs', 'mongodb', 'express.js', ]
        }
    ,
    hobbies: [
        {
            label: 'cricket',
            emoji: '🏏'
        },
        {
            label: 'Gym',
            emoji: '💪'
        },
        {
            label: 'Reading',
            emoji: '📖'
        },
        {
            label: 'chess',
            emoji: '♞'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Crypto currency Price",
            live: "https://virtual-currency.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            // source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            video : crypto
        },
        {
            title: "Exercise Training",
            live: "https://flexigym.netlify.app/",
            // source: "https://github.com/paytonjewell",
            video : gym
        },
        {
            title: "notes making",
            live: "https://shivanshu-tech.github.io/notes-making-app/",
            // source: "https://github.com/paytonjewell",
            video : notes
        },
        {
            title: "english dictionary ",
            live: "https://shivanshu-tech.github.io/dictionary-App/",
            // source: "https://github.com/paytonjewell",
            video : EngDic
        },
        {
            title: "Password Generator",
            live: "https://my1stproj.netlify.app/",
            // source: "https://github.com/paytonjewell",
            video : PassGen
        }
    ]
}