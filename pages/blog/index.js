import Link from 'next/link';
import styles from '../../styles/Blog.module.css';

export default function BlogHome(){
    return (
        <div className={styles.container}>
            <h1>Mi Blog</h1> 
            <div>
                <h2>Entradas</h2>

                <ul>
                    <li>
                        <Link href="blog/posts/mi-primer-post">
                            <a>Mi primer post</a></Link>
                    </li>
                    <li>
                        <Link href="blog/posts/mi-segundo-post">
                            <a>Mi segundo post</a></Link>
                    </li>
                </ul>
            </div>
        </div>);
}