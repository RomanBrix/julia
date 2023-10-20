import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowSvg } from "../svg/arrow.svg";
import useReactRequest from "../hook/useReactRequests";
import moment from "moment";
moment.locale("uk");

export default function NewsContainer() {
    const navigate = useNavigate();

    const {
        isLoading,
        error,
        data: news = [],
    } = useReactRequest("/news/?limit=3");
    console.log(news);
    return (
        <div className="main-news-container">
            {/* <div className="news">
                <div className="date">
                    <span>10:27 Пн</span> 29.09.23
                </div>
                <div className="title">
                    Електронка чи папір? Як суди вестимуть справи після 18
                    жовтня
                </div>
                <div className="btn">
                    Переглянути <ArrowSvg />
                </div>
            </div>
            <div className="news">
                <div className="date">
                    <span>10:27 Пн</span> 29.09.23
                </div>
                <div className="title">
                    Електронка чи папір? Як суди вестимуть справи після 18
                    жовтня
                </div>
                <div className="btn">
                    Переглянути <ArrowSvg />
                </div>
            </div> */}
            {renderNews(news)}

            <div className="news all-news">
                <div
                    className="btn"
                    onClick={() => {
                        navigate("/news");
                    }}
                >
                    всі новини <ArrowSvg />
                </div>
            </div>
        </div>
    );

    function renderNews(arr) {
        return arr.map((item) => {
            const date = moment(item.createdAt);
            return (
                <div className="news" key={item._id}>
                    <div className="date">
                        <span>{date.format("HH:MM dd")}</span>{" "}
                        {date.format("DD.MM.YY")}
                    </div>
                    <div className="title">{item.title}</div>
                    <div
                        className="btn"
                        onClick={() => {
                            navigate(`/news/${item._id}`);
                        }}
                    >
                        Переглянути <ArrowSvg />
                    </div>
                </div>
            );
        });
    }
}
