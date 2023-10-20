import { useNavigate } from "react-router-dom";
import useReactRequest from "../hook/useReactRequests";
import "moment/locale/uk";
import moment from "moment";
moment.locale("uk");

export default function AllNews() {
    const navigate = useNavigate();
    const {
        isLoading,
        error,
        data: news = [],
    } = useReactRequest("/news", { withToken: true });

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
                            navigate("/");
                        }}
                    >
                        Назад
                    </div>
                    Всі новини
                </h1>
                {renderNews(news)}
                {/* <div className="news">
                    <div className="time">05 жовтня</div>
                    <div className="img">
                        <img src={"/intro.jpg"} alt="" />
                    </div>
                    <div className="title">
                        Проект Wellboy починає шлях у шоубізі без самого співака
                        - прем'єра пісні
                    </div>
                    <div className="desc">
                        Пісня “Очі” заспівана дуже схожим голосом і стане
                        початком нового відліку у проекті
                    </div>
                </div> */}
            </div>
        </div>
    );

    function renderNews(news) {
        return news.map((item) => {
            return (
                <div
                    className="news"
                    key={item._id}
                    onClick={() => {
                        navigate(`./${item._id}`);
                    }}
                >
                    <div className="time">
                        {moment(item.createdAt).format("LL")}
                    </div>
                    <div className="img">
                        <img
                            src={item?.photo ? item.photo : "/intro.jpg"}
                            alt=""
                        />
                    </div>
                    <div className="title">{item?.title || "Без назви"}</div>
                </div>
            );
        });
    }
}
