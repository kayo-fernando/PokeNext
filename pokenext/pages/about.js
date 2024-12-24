import styles from "../styles/About.module.css";
import Image from "next/image";

export default function Abouut() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        PokeNext é uma aplicação web interativa para colecionadores e fãs do universo Pokémon. 
        A plataforma permite explorar, organizar e compartilhar coleções de cartas Pokémon 
        de maneira fácil e visualmente atrativa.
      </p>
      <Image
      src="/images/charizard.png"
      alt="Charizard"
      height="300"
      width="300"
      />
    </div>
  );
}
