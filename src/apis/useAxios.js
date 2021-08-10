import { useState, useEffect } from 'react';
import axios from 'axios';
import fixturesData from './fixturesData';

const useAxios = (url, int) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();

        fixturesData.get(url, source)
        .then((res) => {
        if (res.statusText !== 'OK'){
            throw Error('could not fetch data from that resource')
        }
        return res;
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (axios.isCancel(err)) {
                console.log('axios aborted')
            } else {
            setIsPending(false);
            setError(err);
            }
        }).then(
            setTimeout(() => {
                setTimer(timer + 1);
            }, int)
        )
        return () => source.cancel();
    }, [url, int, timer])

    return { data, isPending, error}
}

export default useAxios;