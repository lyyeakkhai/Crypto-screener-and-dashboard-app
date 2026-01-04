// this file contains actions related to coingecko API
// all logic about fecthing data from coingecko API should be here
// so this file must be sever only for fetching data
'user sever';

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

/**
 * Fetches and returns JSON data from the CoinGecko API for a given endpoint and query parameters.
 *
 * @param endpoint - Path appended to the configured CoinGecko base URL (for example, `coins/markets`)
 * @param params - Optional query parameters to include; keys with empty string or `null` are omitted
 * @param revalidate - Cache revalidation time in seconds included in the request metadata
 * @returns The parsed JSON response as type `T`
 * @throws Error when the HTTP response is not OK; message includes the HTTP status and any error text returned by the API
 */
export async function fectcher<T>(
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