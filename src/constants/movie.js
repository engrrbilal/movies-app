export const Movie = {
    imageSource: 'https://www.themoviedb.org/t/p/w220_and_h330_face',
    thumbnail: 'https://www.mediaonmars.com.au/wp-content/uploads/2010/08/movie_poster_rant-310x310.png',
    welecomeCover: 'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg'
}

export const DEFAULT_PAGINATION =  {
    page : 1,
    pageSize : 24,
    ordering: 'DESCENDING',
    total_pages: 0,
}

export const MOVIES_TYPES = [
    { name: 'Trending', value: 'trending' },
    { name: 'Popular', value: 'popular' },
];