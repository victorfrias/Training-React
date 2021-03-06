
//Mock API endpoint
export const API_BASE_ADDRESS = "https://5b7488dda583740014190957.mockapi.io/reacting/";

//Items
//http://5b7488dda583740014190957.mockapi.io/reacting/items
//Items:id
//http://5b7488dda583740014190957.mockapi.io/reacting/items/{id}
export function performFetch(url, init) {
  debugger;
  let objInit = { headers: new Headers({'Content-Type': 'application/json'}), method: 'GET' };
  return fetch(`${API_BASE_ADDRESS}${url}`, objInit)
      .then((response) => {
        debugger;
        if(!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json());
}
