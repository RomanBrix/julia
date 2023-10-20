import { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ImageResize from "quill-image-resize-module-react";
import useReactRequest, { useReactMutation } from "../../hook/useReactRequests";
import { toast } from "react-toastify";

Quill.register("modules/imageResize", ImageResize);

export default function SingleNews() {
    const { id } = useParams();
    const [values, setValues] = useState({
        title: "",
        photo: "",
        desc: "",
    });
    const navigate = useNavigate();

    const {
        isLoading,
        error,
        data: fetchedNews = null,
    } = useReactRequest(`/news/${id}`);
    useEffect(() => {
        if (fetchedNews) {
            setValues(fetchedNews);
        }
    }, [fetchedNews]);

    const saveNews = useReactMutation("/news", {
        withToken: true,
        type: "PUT",
    });
    const deleteNews = useReactMutation(`/news/${values._id}`, {
        withToken: true,
        type: "delete",
    });

    // console.log(error);
    if (!id || error) return <Navigate to={"/admin"} replace />;

    const modules = {
        toolbar: [
            [{ header: [2, 3, 4, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image"],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
        ],
        imageResize: {
            parchment: Quill.import("parchment"),
            modules: ["Resize", "DisplaySize"],
        },
    };
    // const formats = [];
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "color",
        "background",
        "align",
        "image",
    ];

    return (
        <div className="admin-page">
            <button
                className="save"
                onClick={() => {
                    saveNews.mutate(values, {
                        onSuccess: () => {
                            toast.success("Сохраненно");
                        },
                    });
                }}
            >
                Сохранить
            </button>
            <button
                className="delete"
                onClick={() => {
                    deleteNews.mutate(
                        { id: values._id },
                        {
                            onSuccess: () => {
                                toast.success("Удаленно");
                                navigate("..", { replace: true });
                            },
                        }
                    );
                }}
            >
                Удалить
            </button>
            <div className="input-holder">
                <label>Назва:</label>
                <input
                    type="text"
                    value={values.title}
                    placeholder="Назва"
                    onChange={({ target }) => {
                        setValues((prev) => ({
                            ...prev,
                            title: target.value,
                        }));
                    }}
                />
            </div>
            <div className="input-holder">
                <label htmlFor="photo">Главне фото:</label>
                <input
                    type="file"
                    id="photo"
                    // value={values.photo}
                    placeholder="Photo"
                    onChange={({ target }) => {
                        const file = target.files[0];
                        const reader = new FileReader();
                        if (!file) return;

                        reader.readAsDataURL(file);

                        reader.onloadend = () => {
                            const base64String = reader.result;
                            // console.log(base64String);
                            setValues((prev) => ({
                                ...prev,
                                photo: base64String,
                            }));
                            target.value = "";
                        };
                    }}
                />
            </div>

            <div className="text">
                <label>Опис:</label>
                <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={values.desc}
                    onChange={(val) => {
                        setValues((prev) => ({ ...prev, desc: val }));
                    }}
                />
            </div>
        </div>
    );
}
