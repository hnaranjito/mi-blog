import Link from "next/link";
import styles from "../../styles/layout.module.css";

export default function Layout({children}){
    return <div className={style.layouContainer}>
        <div className={style.menuContainer}>
        <li>
            <ul>
                <Link href="">Home</Link>
            </ul>
            <ul>
                <Link href="">About</Link>
            </ul>
            <ul>
                <Link href="">Blog</Link>
            </ul>
        </li>
        {children}
        </div>
        
    </div>
}