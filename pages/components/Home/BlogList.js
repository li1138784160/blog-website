import {Avatar, Space, Tag} from 'antd';
import List from "../../../components/List"
import { LikeOutlined,MessageOutlined,StarOutlined } from '@ant-design/icons';
import React from 'react';
const data = Array.from({
    length: 23,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `我应该什么时候使用getServerSideProps？ ${i}`,
    avatar: 'https://joesch.moe/api/v1/random',
    description:
        '仅当您需要预呈现其数据必须在请求时获取的页面时才应使用。第一个字节的时间 (TTFB) 会比getStaticProps服务器必须计算每个请求的结果要慢，并且如果没有额外配置。',
    content:
        '仅当您需要预呈现其数据必须在请求时获取的页面时才应使用。第一个字节的时间 (TTFB) 会比getStaticProps服务器必须计算每个请求的结果要慢，并且如果没有额外配置，CDN 无法缓存结果。如果您不需要预渲染数据，那么您应该考虑在客户端获取数据。单击此处了解更多信息。',
}));
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const App = () => (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
            <List.Item
                key={item.title}
                actions={[
                    /*<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,*/
                    <div>
                        2021年8月15日 下午 3:00
                    </div>,
                    <div>
                        科技，利器
                    </div>
                ]}
                extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                }
            >
                <List.Item.Meta
                    title={
                        <a href={item.href} className={"text-24px"}>{item.title}</a>
                    }
                    /*description={item.description}*/
                />
                <div className={"text-16px line-clamp-1 pr-16"}>{item.content}</div>
            </List.Item>
        )}
    />
);

export default function BlogList(props){
    return <App/>
}

