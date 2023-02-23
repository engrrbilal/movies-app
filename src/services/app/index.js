import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class AppService extends HttpService {
  fetchAppData = async (baseAuthUrl)  => {
    try {
      // Example of an API call to fetch the app-data
      // This would be consumed in an async action
      const apiResponse = await this.post(`${baseAuthUrl}/app`,
        undefined );

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
}
