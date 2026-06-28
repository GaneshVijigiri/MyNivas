import { getAsync } from "./common/ApiHandler";
import { useQuery } from "@tanstack/react-query";
import { useLoader } from "./common/hooks/useLoader";
import { Button } from "./common/components/ui/button";
import { AppDiaglog } from "./common/components/ui/dialog";
import React from "react";
import Typography from "./common/components/ui/typography";

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { isLoading } = useLoader();
  const { data, isError, error } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getAsync("/WeatherForecast"),
  });
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {(error as Error).message}</div>;
  const onConfirm = () => {
    alert("Confirmed!");
  }
  return (
    <>
      <div className="flex gap-4 items-center">
        <Button variant="outline" size="md" onClick={() => setDialogOpen(true)}>
          Open Dialog
        </Button>
      </div>
      <Typography variant="h2">Vite + React</Typography>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <AppDiaglog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} title="Weather Forecast" confirmText="OK" cancelText="Cancel" onConfirm={onConfirm} />
    </>
  );
}

export default App;

