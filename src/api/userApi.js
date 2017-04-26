import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export let getUsers = () => {
    return get('users');
}

export let deleteUser = (id) => {
    return del(`users/${id}`);
}

let get = (url) => {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since it's a reserved word
let del = (url) => {
    const request = new Request(baseUrl + url, {
        method: "DELETE"
    });

    return fetch(request).then(onSuccess, onError);
}

let onSuccess = (response) => {
    return response.json();
}

let onError = (error) => {
    console.log(error); // eslint-disable-line no-console
}
