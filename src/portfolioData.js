import ev1 from './images/portfolio/design/thumbs/ev1.jpeg';
import ev2 from './images/portfolio/design/thumbs/ev2.jpeg'; 

import pv1 from './images/portfolio/design/thumbs/pv1.jpeg'; 
import pv2 from './images/portfolio/design/thumbs/pv2.jpeg'; 
import pv3 from './images/portfolio/design/thumbs/pv3.jpg'; 
import pv4 from './images/portfolio/design/thumbs/pv4.jpg'; 
import pv5 from './images/portfolio/design/thumbs/pv5.jpeg'; 

import _3d1 from './images/portfolio/design/thumbs/3D.png'; 

import aryaanReg from './images/ourClients/reg/aryaan.svg';
import enixmoReg from './images/ourClients/reg/enixmo.svg';
import fchipReg from './images/ourClients/reg/fchip.svg';
import ixclibanoReg from './images/ourClients/reg/ixclibano.svg';
import rasabaReg from './images/ourClients/reg/rasaba.svg';
import tfwReg from './images/ourClients/reg/The-Wolf-Pack.svg';
import ttgReg from './images/ourClients/reg/Trident-gym.svg'; 

import aryaanBg from './images/ourClients/bg/aryaan.svg';
import enixmoBg from './images/ourClients/bg/enixmo.svg';
import fchipBg from './images/ourClients/bg/fchip.svg';
import ixclibanoBg from './images/ourClients/bg/ixclibano.svg';
import rasabaBg from './images/ourClients/bg/rasaba.svg';
import tfwBg from './images/ourClients/bg/The-Wolf-Pack.svg';
import ttgBg from './images/ourClients/bg/Trident-gym.svg'; 


export default {
    designing: {
        explainerVideos: {
            title: 'Explainer Video',
            data: [
                {
                    id: 1,
                    url:  'https://www.youtube.com/embed/CA7jUavIqM8', 
                    type: 'video',
                    altTag: 'Explainer Video',
                    thumb: ev1,
                    title: 'Product explainer video for Obotap'
                },
                {
                    id: 2,
                    url:  'https://www.youtube.com/embed/7LZKmHk6rXY',
                    type: 'video',
                    altTag: 'Explainer Video',
                    thumb: ev2,
                    title: 'Product explainer video for b2b indemand'
                }
            ]    
        },
        logos: {
            title: 'Logos',
            data: [
                {
                    id: 1,
                    url:  aryaanBg, 
                    type: 'photo',
                    altTag: 'tester',
                    thumb: aryaanReg,
                    title: 'Aryaan',
                    mimeType: 'svg'
                },
                {
                    id: 2,
                    url:  enixmoBg, 
                    type: 'photo',
                    altTag: 'tester',
                    thumb: enixmoReg,
                    title: 'Enixmo',
                    mimeType: 'svg'
                },
                {
                    id: 3,
                    url:  fchipBg, 
                    type: 'photo',
                    altTag: 'tester',
                    thumb: fchipReg,
                    title: 'Fortunachip',
                    mimeType: 'svg'
                },
                {
                    id: 4,
                    url:  ixclibanoBg, 
                    type: 'photo',
                    altTag: 'tester',
                    thumb: ixclibanoReg, 
                    title: 'Ixclibano',
                    mimeType: 'svg'
                },
                {
                    id: 5,
                    url:  rasabaBg, 
                    type: 'photo',
                    altTag: 'tester',
                    thumb: rasabaReg,
                    title: 'Rasaba',
                    mimeType: 'svg'
                },
                {
                    id: 6,
                    url:  tfwBg, 
                    type: 'photo',
                    altTag: 'tester',
                    thumb: tfwReg,
                    title: 'The Wolf Pack',
                    mimeType: 'svg'
                },
                {
                    id: 7,
                    url:  ttgBg, 
                    type: 'photo',
                    altTag: 'tester',
                    thumb: ttgReg,
                    title: 'Trident gym',
                    mimeType: 'svg'
                }
            ] 
        },
        promotionalVideos: {
            title: 'Promotional Videos',
            data: [
                {
                    id: 1,
                    url:  'https://www.youtube.com/embed/1hWua79d94g', 
                    type: 'video',
                    altTag: 'Explainer Video',
                    thumb: pv1,
                    title: 'Logo Intro: The Wolf Pack'
                },
                {
                    id: 2,
                    url:  'https://www.youtube.com/embed/q5UNM1E8Ffw',
                    type: 'video',
                    altTag: 'Explainer Video',
                    thumb: pv2,
                    title: 'Logo Intro: Super Dodo' 
                },
                {
                    id: 3,
                    url:  'https://www.youtube.com/embed/XYRUy3utFRU',
                    type: 'video',
                    altTag: 'Explainer Video',
                    thumb: pv3,
                    title: 'Logo Intro: Doubleplus studios'
                },
                {
                    id: 4,
                    url:  'https://www.youtube.com/embed/oe3o9G3Xt20',
                    type: 'video',
                    altTag: 'Explainer Video',
                    thumb: pv4,
                    title: 'Logo Intro: Farvision Production House'
                }
                ,
                {
                    id: 5,
                    url:  'https://www.youtube.com/embed/tpc6_EA3iCo',
                    type: 'video',
                    altTag: 'Explainer Video',
                    thumb: pv5,
                    title: 'Product promotion: Obotap'
                }
            ]  
        },
        _3dNvfx: {
            title: '3D',
            data: [
                {
                    id: 1,
                    url:  _3d1, 
                    type: 'photo',
                    altTag: 'tester',
                    thumb: _3d1,
                    title: 'Bumblebee'
                }
            ]
        },
    },
    web: [],
    app: [],
    game: []
};