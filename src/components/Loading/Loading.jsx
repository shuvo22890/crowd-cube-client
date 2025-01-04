const Loading = () => {
    return (<div className={"flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ffffff94] dark:bg-dark-transparent rounded-md z-10"}>
        <span className="loading loading-infinity loading-lg text-special-txt dark:text-secondary"></span>
    </div>);
};

export default Loading;