// this file contains actions related to coingecko API
// all logic about fecthing data from coingecko API should be here
// so this file must be sever only for fetching data
'use server';

import qs from 'query-string'

const BASE_URL = process.env.COINGECKO_API_URL;
const API_KEY = process.env.COINGECKO_API_KEY;


// first we need to check if we can access to our API key or not
if(!BASE_URL) {
    throw new Error('Please provide COINGECKO_API_URL env variable')
}
if(!API_KEY) {
    throw new Error('Please provide COINGECKO_API_KEY env variable')
}

// then we can write an async function to fetch data from coingecko API
export async function fetcher<T>(
    endpoint: string,
    params?: QueryParams,
    revalidate = 60
) : Promise<T> {
    // first we need to define which url we are trying to call in this case it is not simple as set varinble to eaqual base url we need to contruct them
    // so we need to use QS library to construct url
    const URL = qs.stringifyUrl({
        url: `${BASE_URL}/${endpoint}`,
        query: params
    }, {skipEmptyString: true, skipNull: true});


    // we can make a request to coingecko API using fetch API
    const response = await fetch(URL, {
        headers: {
            "x-ch-pro-api-key" : API_KEY,
            'Content-Type': 'application/json'
        } as Record<string, string>,
        next: {revalidate}
    });
    // then we need to check if the response is ok or not
    if(!response.ok) {
        const errorBody : CoinGeckoErrorBody = await response.json().catch(() => ({}));

        throw new Error(`API Error: ${response.status} : ${errorBody.error || response.statusText}`);
    }

    return response.json();
}