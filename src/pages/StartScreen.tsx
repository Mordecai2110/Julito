import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {loading ? (
        <div className="tech-loader" />
      ) : (
        <>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-glow">Bienvenido</h1>
          <Button onClick={onStart} className="btn-start text-lg font-medium">
            Iniciar misión
          </Button>
        </>
      )}
    </div>
  );
};

export default StartScreen;
