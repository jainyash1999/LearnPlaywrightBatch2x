interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;

} //? is used to make a property optional

let response1: APIResponse = {
    body: 'Hi',
}; //without optional property

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
};//with optional property