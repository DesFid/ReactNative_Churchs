export default (service) =>
{
    return fetch(`http://10.42.0.1:8010/churchs/${service}`)
    .then(response => Promise.all([response, response.json()]))
}
