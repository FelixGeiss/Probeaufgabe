import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b border-gray-200 px-6 py-4">
     <Image
  src="https://www.wus.de/_assets/93cc33772021915c246c29966f71886a/Icons/layout-logo-w-s-weis.svg"
  alt="Beschreibung"
  width={101}
  height={66}
/>
    </header>
  );
}
