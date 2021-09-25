import { nanoid } from 'nanoid'
import axios from 'axios'
import { OAuthClient } from './OAuthClient'

export class EasyOAuth {

    constructor(clientId, url = 'https://awork-redirect-server.web.app/redirect'){
        this._clientId = clientId
        this._url = url
    }

    async _poll(loginId){
        let finished = false
        let response
        do{
            await new Promise((res) => setTimeout(() => res(), 1000))
            response = await axios.get(url, { params: { polling: loginId } })
            finished = response.data.finished
        }while(!finished)
        return response.data
    }

    async login () {
        const loginId = nanoid()
        const oauth = new OAuthClient(this._clientId,this._url)
        const signInLink = oauth.getSignInLink(loginId)
        const win = window.open(signInLink)
        const data = await this._poll(loginId)
        console.log(data)
        win.close()
    }

}