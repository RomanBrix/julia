import { useDispatch } from "react-redux";
import { redux_logoutUser } from "../../redux/userApi";
import useReactRequest, { useReactMutation } from "../../hook/useReactRequests";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import moment from "moment/moment";
import "moment/locale/uk";
moment.locale("uk");

// moment.locale("fr");

export default function NewsPage() {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const {
        isLoading,
        error,
        data: news = [],
    } = useReactRequest("/news", { withToken: true });
    const addNews = useReactMutation("/news", {
        withToken: true,
        type: "POST",
    });
    const navigate = useNavigate();

    return (
        <div className="admin-page">
            <div
                className="btn-add"
                onClick={() => {
                    //
                    addNews.mutate(
                        {},
                        {
                            onSuccess: ({ data }, variables, context) => {
                                // console.log("data:");
                                console.log(data);
                                navigate(`./news/${data}`);
                                queryClient.invalidateQueries({
                                    queryKey: ["/news"],
                                });
                            },
                        }
                    );
                }}
            >
                +
            </div>
            <div className="container">{renderNews()}</div>
        </div>
    );

    function renderNews() {
        return news.map((item) => {
            return (
                <div
                    className="news"
                    key={item._id}
                    onClick={() => {
                        navigate(`./news/${item._id}`);
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
