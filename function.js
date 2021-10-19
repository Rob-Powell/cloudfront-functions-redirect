function handler(event) {
    var newurl = `https://www.health.gov.au` // Change the redirect URL to your choice
    var response = {
        statusCode: 302,
        statusDescription: 'redirect',
        headers:
            { "location": { "value": newurl } }
        }

    return response;
}
