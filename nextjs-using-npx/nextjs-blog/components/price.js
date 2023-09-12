
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Price() {
    const { data, error, isLoading } = useSWR('https://api.coindesk.com/v1/bpi/currentprice.json', fetcher)
 
    if (error) return <div>failed to load!</div>
    if (isLoading) return <div>loading in progess...</div>
    
    // render data
    return <div>Price: {data.bpi.EUR.rate}</div>
  }