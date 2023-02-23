import React, { memo } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '../common/circular-progress';
import { Movie } from '../../constants/movie';
import { DATE_FORMATS } from '../../constants/date';

const MoviesListItem = ({ movie, isLoading }) => {
  const { id, title, poster_path, vote_average, release_date } = movie;
  const history = useHistory();
  const votePercentage = parseInt(vote_average * 10);

  const navigateToMovieDetail = () => {
    history.push(`/movie/${id}`)
  }

  return (
    <div className={`movie-list-card ${isLoading && 'shimmer'}`} onClick={ navigateToMovieDetail }>
    <img 
        src={poster_path ? `${Movie.imageSource}/${poster_path}`: `${Movie.thumbnail}`}
        className="card-img-top"
        alt={movie.title}  
    />
    { vote_average && !isNaN(votePercentage) &&
        <div className='rating-container'>
            <CircularProgress value={ votePercentage }/>
        </div>
    }
    <div className="card-body-box">
        <h5>{title}</h5>
        <p className='date'>{moment(release_date).format(DATE_FORMATS.displayDate)}</p>
    </div>
    </div>
  )
};

export default memo(MoviesListItem);
