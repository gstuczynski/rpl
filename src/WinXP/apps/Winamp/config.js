// from Webamp demo
import witcher from './music/The-Witcher-3-Wild-Hunt-Sword-of-Destiny.mp3'

const album = 'netBloc Vol. 24: tiuqottigeloot';
export const initialTracks = [
  {
    url: witcher,
    duration: 322.612245,
    metaData: {
      title: 'Sword of Destiny',
      artist: 'The Witcher',
      album,
    },
  },
  {
    url:
      './music/Sevara-Nazarkhan-We-are-muay-thai.mp3',
    duration: 190.093061,
    metaData: {
      title: 'We are Muay Thai',
      artist: 'Sevara Nazarkhan',
      album,
    },
  },
  {
    url:
      './music/Age-of-empires-2.mp3',
    duration: 214.622041,
    metaData: {
      title: 'Age Of Empires 2',
      artist: '',
      album,
    },
  },  
];
