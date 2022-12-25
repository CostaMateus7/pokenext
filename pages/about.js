import Image from 'next/image';
import Style from '../styles/About.module.css';

export default function About() {
  return (
    <div className={Style.divContainerStyle}>
      <div className={Style.divMiniContainerStyle}>
        <h1>Projeto Poke Next</h1>
        <p>Este é um projeto realizado com base no curso de Next do professor Matheus Battisti na paltaforma do Youtube. Ele consome API externa do PokeAPI. O intuito desse projeto é treinar as funcionalidades do NextJs</p>
        <Image
          src="/images/charizard.png"
          width={300}
          height={300}
          alt="Charizard"
        />
      </div>
    </div>
  );
}
