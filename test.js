useEffect(()=>{
    const fetchData = async (res) => {
        if (!res.ok){
            throw Error('Couild not fetch the data from that resource')
        }
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsPending(false);
        setError(null)
    }

    fetchData()
        .catch(err =>{
            setIsPending(false)
            setError(err.message)
        })

}, [url]);


useEffect(() =>{
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })    
    }, [url]);