import { useState, useEffect } from "react";

const useEnvironment = () => {
  const [env, setEnv] = useState("dev");

  useEffect(() => {
    setEnv(process.env.NEXT_PUBLIC_ENV ?? "dev");
  }, []);

  return env;
};

export default useEnvironment;
