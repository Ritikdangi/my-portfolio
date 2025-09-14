import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio 🚀</h1>
      </section>
    </main>
  );
}
