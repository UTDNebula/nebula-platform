import { GoogleButton } from '@/components/LoginButtons';

export default function Home() {
  return (
    <div className="hero h-screen">
      <div className="hero-content flex-col">
        <h1 className="font-display text-5xl font-bold">NEBULA PLATFORM</h1>
        <h2 className="text-lg hero">All in One platform for all things nebula</h2>
        <GoogleButton />
        <div>Vercel testing: {process.env.VERCEL_PROJECT_PRODUCTION_URL}</div>
      </div>
    </div>
  );
}
