import axios from 'axios';

const CREDIT_REQUEST_BASE_URL = "http://localhost:8080/api/v1/credit_request";

class CreditRequestService {

    getCreditRequests() {
        return axios.get(CREDIT_REQUEST_BASE_URL);
    }

    createCreditRequest(request) {
        return axios.post(CREDIT_REQUEST_BASE_URL, request);
    }

}

export default new CreditRequestService()