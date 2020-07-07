import React, { useEffect } from 'react';
import { usePath } from '../hooks/path';

export default () => {
    const path = usePath();
    useEffect(() => {
        if(typeof window === "undefined")
            return;

        const url = new URL(path);
        const params = url.searchParams;
        const redirectUrl = params.get("redirect");        
        window.location.href = redirectUrl.indexOf('/') === 0 ?
            "https://dogger.io" + redirectUrl :
            "https://dogger.io";
    }, [path]);

    return <></>;
}