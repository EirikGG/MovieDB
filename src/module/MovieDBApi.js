/**
 * Getts requests from the database.
 *
 * @author: Eirik Gribbestad Gustafsson
 * @version: 25.03.2018
 */

var api = {
  getData() {
    var url = 'someurl';
    return fetch(url)
           .then((res) => res.json())
           .catch((err) => console.log(err));
  }
}
