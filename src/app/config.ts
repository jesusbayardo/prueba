import { environment } from './../environments/environment';



export const config = {

    api: {

        url: environment.api.url,



        login: {
            resource: "/oauth/token"
        }
        ,
        urlestudiantes: environment.api.urlApi,






    }
}