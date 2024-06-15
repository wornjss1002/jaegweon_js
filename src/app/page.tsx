import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  const name = 'jaegweon';
  const result = 1 + 2;
  return (
    <main>
      <div className="font-mono bg-red-900 text-red-300">
        <Navbar />
      </div>
      <div className="font-mono bg-orange-900 text-orange-300 text-center mt-1 p-4">
        <h1 className="text-3xl font-bold">Main Page</h1>
      </div>
      <div className="font-mono bg-purple-600 text-orange-300 text-center m-4">
        <p>{name}, 어서오고</p>
        <p>This page is made for node js, next js, tailwind.</p>
      </div>
      <div className="font-mono bg-blue-600 text-blue-300 text-center m-4">
        <p>1 + 2 = {result}</p>
        <p>Bassguitar를 좋아합니다.</p>
        <p>Web개발, 보안을 공부하고 있어요.</p>
      </div>
      <div className="font-mono bg-white-600 text-blue-300 text-center m-4 flex justify-center">
        <Image src="/img.jpg" alt="guitar.jpg" width="500" height="300"></Image>
      </div>
      <Footer />
    </main>
  );
}
