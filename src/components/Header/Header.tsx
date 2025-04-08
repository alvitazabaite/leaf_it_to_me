import viteLogo from '/vite.svg';
import reactLogo from '../../assets/react.svg';

export default function Header() {
  return (
    <header className="bg-amber-400 h-[60px] w-full fixed">
      <div className="flex justify-center h-full">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </header>
  );
}
