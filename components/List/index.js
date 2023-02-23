import {List as AntList} from 'antd'
import classnames from "classnames";
import styles from './index.module.scss'

export default function List({className,...props}){
    return <div className={classnames(styles.wrapper,className)}>
        <AntList {...props} />
    </div>
}

List.Item=AntList.Item;

List.Item.Meta=AntList.Item.Meta;