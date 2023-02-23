import Home from "./components/Home";

export async function getStaticProps() {
    const menus=["首页","科技","福利","利器","技术","其他"];

    return {
        props: {
            menus,
        },
    }
}

export default Home;
