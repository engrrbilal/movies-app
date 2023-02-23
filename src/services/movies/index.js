import { BASE_URL } from '../../constants/config';
import { RESPONSE_TYPES } from '../../constants/response-types';
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';

export class MoviesService extends HttpService {

  fetchMovies = async (params = {})=> {
    try {
      const { page, pageSize, moviesType } = params;
      const pagination = { page, pageSize};

      const apiResposne = await this.get(`${BASE_URL}/${moviesType}/all/day`, {...pagination});
      return prepareResponseObject(apiResposne, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  }

  fetchPopularMovies = async (params = {})=> {
    try {
      const apiResposne = await this.get(`${BASE_URL}/movie/popular`, {...params});
      return prepareResponseObject(apiResposne, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  }

  searchMovies = async (params = {})=> {
    try {
      const apiResposne = await this.get(`${BASE_URL}/search/movie`, {...params});
      return prepareResponseObject(apiResposne, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  }

  fetchMovieDetailsById = async (id = '')=> {
    try {
      const apiResposne = await this.get(`${BASE_URL}/movie/${id}`);
      return prepareResponseObject(apiResposne, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  }

  fetchTopRatedMovies = async ()=> {
    try {
      const apiResposne = await this.get(`${BASE_URL}/movie/top_rated`);
      return prepareResponseObject(apiResposne, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  }
}
