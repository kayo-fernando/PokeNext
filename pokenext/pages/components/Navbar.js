import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Navbar.module.css";

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image 
                src="/images/pokeball.png"
                height="30"
                width="30"
                alt="PokeNext"
                />
                    <a><h1>PokeNext</h1></a>
            </div>
            <ul className={styles.linkItems}>
                <li>
                    <Link href="/home" legacyBehavior>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}