import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
];

export const allowedCountries = [
  "DZ","BY","CI","SN","TN","AU","AT","AZ","AR","BE","BG","BR","GB","HU","VE","VN","GH","DE","GR","DK","EG","ZM","IL","IN","ID","IE","ES","IT","KZ","CM","CA","KE","CN","CO","CR","MY","MA","MX","MZ","NG","NL","NZ","NO","AE","PE","PL","PT","RU","RO","SA","SG","US","TH","TZ","TR","UG","UZ","UA","UY","PH","FI","FR","HR","CZ","CL","CH","SE","ZA","KR","JP"
]