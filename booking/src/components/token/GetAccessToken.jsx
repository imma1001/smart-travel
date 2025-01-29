import config from '../../config'
import axios from 'axios';

    export const getAccessToken = async () => {
        const clientId = config.API_KEY
        const clientSecret = config.API_SECRET
    
        const response = await axios.post(
          "https://test.api.amadeus.com/v1/security/oauth2/token",
          new URLSearchParams({
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
          }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        )
        return response.data.access_token;
      }
 

