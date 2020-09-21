import {BaseUrl} from '../common'

export default {
    get(url, query) {
        return fetch(`${baseUrl}${url}`)
    }
}