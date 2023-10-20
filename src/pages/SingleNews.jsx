import moment from "moment";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "moment/locale/uk";
import { useEffect, useRef } from "react";
import useReactRequest from "../hook/useReactRequests";
moment.locale("uk");

export default function SingleNews() {
    const { id } = useParams();
    const {
        isLoading,
        error,
        data: fetchedNews = null,
    } = useReactRequest(`/news/${id}`);
    const htmlTextRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (htmlTextRef.current && fetchedNews) {
            htmlTextRef.current.innerHTML = fetchedNews.desc;
        }
    }, [htmlTextRef.current, fetchedNews]);
    console.log(error);
    if (!id || error) return <Navigate to={".."} replace />;

    if (isLoading) return <></>;

    return (
        <div className="news-container-page">
            <div className="top">
                <img
                    src="/sec_logo_black.svg"
                    alt=""
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </div>
            <div className="container">
                <h1>
                    <div
                        className="btn"
                        onClick={() => {
                            navigate("../");
                        }}
                    >
                        Назад
                    </div>
                    {fetchedNews.title}
                </h1>
            </div>
            <div
                className="title"
                // style={{ backgroundImage: `url(${fetchedNews.photo})` }}
            >
                <span>{moment(fetchedNews.createdAt).format("LL")}</span>
            </div>
            <div className="desc" ref={htmlTextRef} />
        </div>
    );
}
