import config from '../config';
import { handleResponse } from '../helpers';
import { authenticationService } from './authentication.service';

export const questsService = {
    create
};

function create(title) {

    let token = localStorage.getItem('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': token },
        body: JSON.stringify({quest: {title: title}})
    };

    return fetch(`${config.apiUrl}/api/v1/quests`, requestOptions)
        .then(handleResponse)
        .then(response => {
            console.log("questsService::create::response", response)
            return response;
        });
}