import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const useContributors = (page = 0, limit = 8, shouldLoad = true) => {
    const [contributors, setContributors] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!shouldLoad) return;
        setLoading(true);
        const loadData = async () => {
            if (total === 0) {
                const getTotalReq = await fetch('http://localhost:5000/total-contributors');
                const res = await getTotalReq.json();
                setTotal(res.total);
            }

            fetch(`http://localhost:5000/contributors?page=${page}&limit=${limit}`)
                .then(res => res.json())
                .then(data => {
                    setContributors(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        loadData();
    }, [total, page, limit, shouldLoad])

    return { contributors, total, loading }
};

useContributors.propTypes = {
    page: PropTypes.number,
    limit: PropTypes.number,
    shouldLoad: PropTypes.bool
}

export default useContributors;