import './index.module.scss'
import MainMenu from "../MainMenu";
import classNames from "classnames";
export default function GlobalHeader({menus}){

    return <div className={classNames("flex flex-row justify-between items-center")}>
        <div className={"flex-1 text-20px"}>这是LOGO</div>
        <div>
            <MainMenu menus={menus}/>
        </div>
    </div>
}