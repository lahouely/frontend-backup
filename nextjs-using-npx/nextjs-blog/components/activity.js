import useSWR, { useSWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Activity() {
  const { mutate } = useSWRConfig(); 
  const { data, error, isLoading } = useSWR('https://www.boredapi.com/api/activity', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
 
    if (error) return <div>failed to load!</div>;
    if (isLoading) return <div>loading in progess...</div>;
    
    // render data
    return(
    <>
      <div>
        <button onClick={() => {
          // tell all SWRs with this key to revalidate
          mutate('https://www.boredapi.com/api/activity')
        }}>
          Get new activity!
        </button>
      </div>
      <div>
        Activity: {data.activity}
      </div>
    </>
    );
  }