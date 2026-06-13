import { getAsync } from "./common/ApiHandler";
import { useQuery } from "@tanstack/react-query";
import { useLoader } from "./common/hooks/useLoader";
import AppButton from "./common/components/AppButton";

function App() {
  const { isLoading } = useLoader();
  const { data, isError, error } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getAsync("/WeatherForecast"),
  });
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {(error as Error).message}</div>;
  return (
    <>
      <div className="flex gap-4 items-center">
        <AppButton appearance="primary" className="bg-blue-600">Show</AppButton>
        <AppButton appearance="outline">Outline</AppButton>
        <AppButton appearance="ghost">Ghost</AppButton>
      </div>
      <h1 className="font-bold text-3xl text-blue-500">Vite + React</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
