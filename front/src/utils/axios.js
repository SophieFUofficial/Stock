/**  axios基础配置 */
import axios from 'axios';
import { message } from 'antd';

export default class Axios {

    static axiosGet(url, params){
        return new Promise((resolve, reject) => {
            axios.get( url, {
                params: params
            }).then(response => {
                if (response.status === 200) {
                    resolve(response.data);
                }
            }, err => {
                reject(err);
            })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    static axiosPost(url, data){
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(response => {
                    if (response.status === 200) {
                        resolve(response.data);
                    }
                    if (response.status === 202) {
                        message.error(response.data.errorMessage);
                    }
                }, err => {
                    message.error('Error');
                    reject(err);
                })
                .catch((error) => {
                    message.error('Error');
                    reject(error);
                })
        })
    }
}
