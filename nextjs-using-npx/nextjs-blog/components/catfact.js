import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function CatFact() {
    const { data, error, isLoading } = useSWR('https://catfact.ninja/fact', fetcher)
 
    if (error) return <div>failed to load!</div>
    if (isLoading) return <div>loading in progess...</div>
    
    // render data
    return <div>CatFact: {data.fact}</div>
  }