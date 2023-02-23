import About from "./components/About";

export async function getStaticProps() {
    // 调用外部 API 获取博文列表
    const name = "小红";

    // 通过返回 { props: { posts } } 对象，Blog 组件
    // 在构建时将接收到 `posts` 参数
    return {
        props: {
            name,
        },
    }
}

export default About;

