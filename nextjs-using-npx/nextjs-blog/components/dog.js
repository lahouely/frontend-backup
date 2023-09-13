import useSWR from 'swr';
import { useState } from 'react';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Dog() {
    const { data, error, isLoading } = useSWR('https://dog.ceo/api/breeds/image/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshInterval: 1000,
      });
    const [planB, setplanB] = useState();
    const [currentUrl, setCurrentUrl] = useState();
    if (error) return helper('https://fakeimg.pl/300x300?text=Failed&font=lobster','dog picture',planB, setplanB);
    if (isLoading) return helper('https://fakeimg.pl/300x300?text=Loading&font=lobster','dog picture',planB, setplanB);
    if (currentUrl!==data.message){
        setCurrentUrl(data.message);
        setplanB(false);
    }
    return helper(data.message,'dog picture',planB, setplanB);
    
}


function helper(url, alt, planB, setplanB, fallbackUrl='https://fakeimg.pl/300x300?text=>Failed<+&font=lobster') {
   
    return(
        <Image
            priority
            src={planB?fallbackUrl:url}
            className={utilStyles.borderCircle}
            quality={80}
            height={300}
            width={300}
            onError={ (e) => {
                setplanB(!planB);
            }}        
            alt={alt}
        />
    );
}



