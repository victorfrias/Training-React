
//Mock API endpoint
export const API_BASE_ADDRESS = "http://5b7488dda583740014190957.mockapi.io/reacting/";

//Items
//http://5b7488dda583740014190957.mockapi.io/reacting/items
//Items:id
//http://5b7488dda583740014190957.mockapi.io/reacting/items/{id}

export function performFetch(url, init) {
  return fetch(`${API_BASE_ADDRESS}${url}`, HELLO);      
}
