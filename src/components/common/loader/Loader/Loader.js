import style from "./loader.module.css";

function Loader() {
    return (
        <div className={style.backdrop}>
            <div className={style.container}>
                <div className={style.loader}></div>
            </div>
        </div>
    );
}

export default Loader;