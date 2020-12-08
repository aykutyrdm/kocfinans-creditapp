import axios from 'axios';

const CREDIT_SCORE_BASE_URL = "http://localhost:8080/api/v1/credit_score";

class CreditScoreService {

    getCreditScores() {
        return axios.get(CREDIT_SCORE_BASE_URL);
    }

    createCreditScore(score) {
        return axios.post(CREDIT_SCORE_BASE_URL, score);
    }

}

export default new CreditScoreService()