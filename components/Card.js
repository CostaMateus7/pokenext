import Image from 'next/image';
import Link from 'next/link';
import Styles from '../styles/Card.module.css';

export default function Card({ pokemon }) {
  return (
    <div className={Styles.CardContainer}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p>
        #
        {' '}
        {pokemon.id}
      </p>
      <h2>{pokemon.name}</h2>
      <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  );
}
