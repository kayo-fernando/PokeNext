import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Card.module.css"

export default function Card({pokemon}){
    
    return(
        <div className={styles.card}>
                <Image
                    src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
                    height="120"
                    width="120"
                    alt={pokemon.name}
                />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.description}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
                <a className={styles.details}>Detalhes</a>
            </Link>
        </div>
    );
}