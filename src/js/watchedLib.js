// import { onFilmCardClick } from './modal_film';
import { openWatchedBtn, openQueueBtn } from './refs';
import { renderMoviesTrending } from './renderMoviesTrending';

const moviesElement = document.querySelector('.movies');

openWatchedBtn.addEventListener('click', onWatchedBtnClick);
openQueueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  moviesElement.innerHTML = '';
  renderMoviesTrending(FilmsInLocalStorage('Watched'));
  // renderMoviesTrending(testData);
}

function onQueueBtnClick() {
  moviesElement.innerHTML = '';
  renderMoviesTrending(FilmsInLocalStorage('Queue'));
  // renderMoviesTrending(testDataQueue);
}

//get films from me library
export function FilmsInLocalStorage(category) {
  let dataInLocalStorage = localStorage.getItem(category);
  let parsedDataInLocalStorage = '';

  try {
    return (parsedDataInLocalStorage = JSON.parse(dataInLocalStorage));
  } catch (error) {
    console.warn('Ошибка во время парса данных с локального хранилища');
  }
}

const testData = {
  results: [
    {
      adult: false,
      backdrop_path: '/au236RSArVTOMXM6AXVNBPZEKNb.jpg',
      genre_ids: [35, 12, 10751, 14],
      id: 10588,
      original_language: 'en',
      original_title: 'The Cat in the Hat',
      overview:
        "Conrad and Sally Walden are home alone with their pet fish. It is raining outside, and there is nothing to do. Until The Cat in the Hat walks in the front door. He introduces them to their imagination, and at first it's all fun and games, until things get out of hand, and The Cat must go, go, go, before their parents get back.",
      popularity: 87.925,
      poster_path: '/uYYLz67e5xEQMsY858VSSCDsLU6.jpg',
      release_date: '2003-11-21',
      title: 'The Cat in the Hat',
      video: false,
      vote_average: 5.3,
      vote_count: 1369,
    },
    {
      adult: false,
      backdrop_path: '/1PQqvw7wnGeWqvXcBLaGK46n0zk.jpg',
      genre_ids: [16, 14, 28, 10402],
      id: 496450,
      original_language: 'fr',
      original_title: 'Miraculous Ladybug & Cat Noir: The Movie',
      overview:
        'A pair of Parisian high schoolers protect their city as vigilante heroes without comprising their identities to anyone, including each other.',
      popularity: 57.521,
      poster_path: '/sIwKj6l49CepyWMUMjOZ6B5VF02.jpg',
      release_date: '2023-07-05',
      title: 'Miraculous Ladybug & Cat Noir: The Movie',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/Agx6yUbh09BAjQlXfQlaXRpdIq0.jpg',
      genre_ids: [99],
      id: 1003180,
      original_language: 'en',
      original_title: 'Inside the Mind of a Cat',
      overview:
        'Cat experts dive into the mind of the feline to reveal the true capabilities of the pouncing pet in this captivating and cuddly documentary.',
      popularity: 81.221,
      poster_path: '/lqngTIvF2UdcK9uTZ8nLX3AfbHp.jpg',
      release_date: '2022-08-18',
      title: 'Inside the Mind of a Cat',
      video: false,
      vote_average: 7.4,
      vote_count: 101,
    },
  ],
};
const testDataQueue = {
  results: [
    {
      adult: false,
      backdrop_path: '/9ueD5NSVOn0dWTL93WciT9JoKN3.jpg',
      genre_ids: [10751, 18],
      id: 404378,
      original_language: 'en',
      original_title: 'A Street Cat Named Bob',
      overview:
        'James Bowen, a homeless busker and recovering drug addict, has his life transformed when he meets a stray ginger cat.',
      popularity: 12.886,
      poster_path: '/nBYG0D2FcbL1m926sIj7RN4m0sb.jpg',
      release_date: '2016-11-04',
      title: 'A Street Cat Named Bob',
      video: false,
      vote_average: 7.9,
      vote_count: 1149,
    },
    {
      adult: false,
      backdrop_path: '/mSdpQhD0AzwKiwGiWhMqn04XbWB.jpg',
      genre_ids: [27],
      id: 26503,
      original_language: 'it',
      original_title: 'Black Cat: Gatto nero',
      overview:
        'When a young couple goes missing in a sleepy English village, Scotland Yard Inspector Gorley is brought in to assist on the case.  But what starts off as routine investigation turns into a murder inquiry when the couple are found dead in mysterious circumstances.',
      popularity: 5.382,
      poster_path: '/69bYJOdhjXXVycXd8mZdlpyYgyr.jpg',
      release_date: '1981-04-04',
      title: 'The Black Cat',
      video: false,
      vote_average: 6.1,
      vote_count: 99,
    },
    {
      adult: false,
      backdrop_path: '/muY5sFFZnI7A3KGG7Iqd3xyCY7m.jpg',
      genre_ids: [28, 9648, 53],
      id: 48170,
      original_language: 'en',
      original_title: 'Black Cat Run',
      overview:
        "A girl is in love with a gas station attendant and sees him against her father's wishes. The father is the sheriff and shortly after a confrontation with the boy friend, he is killed by escaped convicts and the daughter is kidnapped. Everyone, including the deputy, is convinced that the boy friend committed the murder and ran away with the girl. This sets up a chase of the convicts by the boy friend and of the boy friend by the police.",
      popularity: 5.816,
      poster_path: '/mwc5GRwZCgbH3dEa4LDMMOnnUVa.jpg',
      release_date: '1998-09-18',
      title: 'Black Cat Run',
      video: false,
      vote_average: 5.4,
      vote_count: 11,
    },
  ],
};
