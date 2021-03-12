import BaseAPIClient from './BaseApiClient'
const url = 'https://free-nba.p.rapidapi.com'
class NBA extends BaseAPIClient {
  getAllTeams () {
    return super.execGET(`${url}/teams`)
  }

  getAllPlayers () {
    return super.execGET(`${url}/players`)
  }
}

export default new NBA()
