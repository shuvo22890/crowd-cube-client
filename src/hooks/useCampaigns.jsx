import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const useCampaigns = (sort='', page = 0, type='',  limit = 8, shouldLoad = true) => {
    const [campaigns, setCampaigns] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!shouldLoad) return;
        setLoading(true);
        const loadData = async () => {
            if (total === 0) {
                const getTotalReq = await fetch(`http://localhost:5000/total-campaigns?type=${type}`);
                const res = await getTotalReq.json();
                setTotal(res.total);
            }

            fetch(`http://localhost:5000/campaigns?page=${page}&limit=${limit}&sort=${sort}&type=${type}`)
                .then(res => res.json())
                .then(data => {
                    setCampaigns(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        loadData();
    }, [total, page, limit, sort, type, shouldLoad])

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