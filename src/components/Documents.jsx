import { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../images/arrowLeft.svg";
import { ReactComponent as RightArrow } from "../images/arrowRight.svg";
export default function Documents() {
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        changeSlide();
    }, [slide]);
    return (
        <div className="docs about">
            <div className="content">
                <h1>Нагороди та досягнення</h1>
                <div className="container">
                    <LeftArrow
                        className={`arrow arrow-left ${
                            slide > 0 ? "" : "hide-arrow"
                        }`}
                        onClick={prevSlide}
                    />
                    {/* <div id="kkk"></div> */}
                    <div className="slider" id="slider">
                        <div className="imgs" id="imgs">
                            {renderImgs()}
                        </div>
                    </div>
                    <RightArrow
                        className="arrow arrow-right"
                        onClick={nextSlide}
                    />
                    <div className="load">{renderLoad()}</div>
                </div>
            </div>
        </div>
    );
    function renderLoad() {
        const imgs = document.getElementById("imgs");
        const slider = document.getElementById("slider");
        const imgsWidth = imgs?.offsetWidth || 0;
        const sliderWidth = slider?.offsetWidth || 0;

        // alert(sliderWidth);
        const maxSlide = Math.ceil(imgsWidth / sliderWidth) - 1;
        let arr = [];
        for (let i = 0; i < maxSlide; i++) {
            arr.push(
                <div
                    key={i}
                    className={`load-item ${slide > i ? "active-item" : ""}`}
                />
            );
        }
        return arr;
    }
    //change slide position
    function changeSlide() {
        const slider = document.getElementById("slider");
        const sliderWidth = slider.offsetWidth;
        const howMuchImgs = Math.ceil(sliderWidth / 320);
        const change = 320 * howMuchImgs * slide;
        // console.log(change, howMuchImgs, slide);
        const imgs = document.getElementById("imgs");
        imgs.style.transform = `translateX(-${change}px)`;
    }
    function nextSlide() {
        const imgs = document.getElementById("imgs");
        const slider = document.getElementById("slider");
        const imgsWidth = imgs.offsetWidth;
        const sliderWidth = slider.offsetWidth;

        // alert(sliderWidth);
        const maxSlide = Math.ceil(imgsWidth / sliderWidth) - 1;
        // document.querySelector("#kkk").innerHTML = maxSlide;
        // console.log(maxSlide);
        if (slide < maxSlide) {
            setSlide(slide + 1);
        } else {
            setSlide(0);
        }
    }
    function prevSlide() {
        if (slide > 0) {
            setSlide(slide - 1);
        } else {
            setSlide(0);
        }
    }
    function renderImgs() {
        let arr = [];
        for (let i = 1; i <= 19; i++) {
            if (i <= 12) {
                arr.push(<img key={i} src={`/documents/${i}.jpg`} alt="" />);
            } else {
                arr.push(<img key={i} src={`/documents/${i}.png`} alt="" />);
            }
        }
        // setMaxSlide(Math.ceil(arr.length * 320) - 1);
        return arr.reverse();
    }
}
