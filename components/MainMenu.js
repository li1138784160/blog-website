import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import Menu from "./Menu";
import {useState} from "react";

export default function MainMenu({menus}){

    const labelClassName="text-18px";

    const items = menus.map((item,index)=>({
        label: <div className={labelClassName}>{item}</div>,
        key: "menu"+index,
    }));

    const [current, setCurrent] = useState('menu0');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}