import {Menu as AntMenu} from 'antd'
import classNames from "classnames";

export default function Menu({className,...props}){
    return <div className={classNames("wrapper",className)}>
        <AntMenu {...props} />
    </div>
}