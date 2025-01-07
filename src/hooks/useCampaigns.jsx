import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const useCampaigns = (sort='', page = 0, type='',  limit = 8, shouldLoad = true, running=false) => {
    const [campaigns, setCampaigns] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!shouldLoad) return;
        setLoading(true);
        const loadData = async () => {
            if (total === 0) {
                const campName = running ? 'total-running-campaigns' : 'total-campaigns';
                const getTotalReq = await fetch(`https://server-ten-wine.vercel.app/${campName}?type=${type}`);
                const res = await getTotalReq.json();
                setTotal(res.total);
            }

            const name = running ? 'running-campaigns' : 'campaigns';
            console.log(name)
            fetch(`https://server-ten-wine.vercel.app/${name}?page=${page}&limit=${limit}&sort=${sort}&type=${type}`)
                .then(res => res.json())
                .then(data => {
                    setCampaigns(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        loadData();
    }, [total, page, limit, sort, type, shouldLoad, running])

    return { campaigns, total, loading }
};

useCampaigns.propTypes = {
    page: PropTypes.number,
    limit: PropTypes.number,
    sort: PropTypes.string,
    type: PropTypes.string,
    shouldLoad: PropTypes.bool,
    running: PropTypes.bool
}

export default useCampaigns;