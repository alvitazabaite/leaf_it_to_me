import viteLogo from '/vite.svg';
import reactLogo from '../../assets/react.svg';

export default function Header() {
  return (
    <header className="bg-amber-400 h-[60px] w-full fixed">
      <div className="flex justify-center h-full">
        <img src={viteLogo} className="animate-spin-reverse-slow" alt="Vite logo" />
        <img src={reactLogo} className="animate-spin-reverse-slower" alt="React logo" />
      </div>
    </header>
  );
}
