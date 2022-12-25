import Image from 'next/image';
import Link from 'next/link';
import Styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <header className={Styles.headerStyle}>
      <div>
        <h1>Poke</h1>
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="Logo poke"
        />
      </div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Sobre</Link></li>
      </ul>
    </header>
  );
}
