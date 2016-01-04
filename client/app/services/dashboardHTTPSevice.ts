import {Http, Response} from 'angular2/http'
import {Injectable} from 'angular2/core'

@Injectable()
export class DashboardHTTPSevice {

    http:Http;
    constructor(http:Http){
        this.http = http;
    }

    getSummary(){
        return this.http.get('api/dashboardSummary').map((res: Response) => res.json());
    }

}