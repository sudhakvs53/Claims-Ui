export default class Helper {

    static fetchData(url, project_id) {
        return fetch(url, {
                method: 'GET',
                headers: new Headers({
                    "project_id": project_id
                })
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json());
    }



}