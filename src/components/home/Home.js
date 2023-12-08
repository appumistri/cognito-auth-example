import style from "./home.module.css";

function Home(params) {

    const signout = async () => {
        params.loading(true);
        localStorage.removeItem('idToken');
        await new Promise(res => setTimeout(res, 100));
        params.loading(false);
    }

    return (
        <>
            <p className={style.welcome} title={params.userid}>Welcome {params.username}</p>
            <button className={style.signout} onClick={signout}>Sign out</button>
        </>
    );
}

export default Home;