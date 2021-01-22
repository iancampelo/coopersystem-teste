import axios from 'axios'

const apiInvestimentos = axios.create({
    baseURL: 'http://www.mocky.io/v2',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
})

const getInvestimentos = () => apiInvestimentos.get(`/5e76797e2f0000f057986099`)

export default {
  getInvestimentos,
}
