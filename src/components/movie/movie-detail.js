import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { DATE_FORMATS } from '../../constants/date';
import { LANGUAGES } from '../../constants/language';
import { Movie } from '../../constants/movie';
import { convertMinutesToHoursAndMinutes } from '../../utils/common';

export const MovieDetails = ({ movie }) => {
  const { title, poster_path, release_date, overview, original_language, tagline, runtime, rating, similarMovies } = movie;
  const [t] = useTranslation('movies');

  return (
    <div className="movie-details-container" 
        style={{ backgroundImage: `url(${Movie.imageSource}/${poster_path})`}}
    >
        <div className="movie-details" >
        <div className="movie-details-poster">
            {poster_path ? 
                <img 
                    src={`${Movie.imageSource}/${poster_path}`}
                    className="movie-details-poster"
                    alt={title}  
                />
                :
                <img 
                    src={Movie.thumbnail} 
                    className="movie-details-poster" 
                    alt={title} 
                />
            }

        </div>
            <div className="movie-details-body-container">
                <div className="movie-details-header-text">
                    <h2>{title}</h2>
                    <div className='movie-subheader'>
                        <p className='movie-details-release-date'>{moment(release_date).format(DATE_FORMATS.displayDate)}</p>
                        <p>{convertMinutesToHoursAndMinutes(runtime)}</p>
                    </div>
                </div>
                <p className='tagline'>{tagline}</p>
                <div className="movie-details-summary">
                    <h5>{t('movie.overview')}</h5>
                    <p>{overview}</p>
                </div>
                <div className="movie-details-info">
                {/* <div className="movie-details-info-block">
                    <h5>Director</h5>
                    <p>{director}</p>
                </div> */}
                <div className="movie-details-info-block">
                    <h5>{t('movie.orginalLanguage')}</h5>
                    <p> 
                        {LANGUAGES[original_language] ? LANGUAGES[original_language]: original_language}
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
};
