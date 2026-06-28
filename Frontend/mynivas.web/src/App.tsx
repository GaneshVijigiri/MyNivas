import { getAsync } from "./common/ApiHandler";
import { useQuery } from "@tanstack/react-query";
import { useLoader } from "./common/hooks/useLoader";
import { Button } from "./common/components/shadcn/button";
import React from "react";
import Typography from "./common/components/shadcn/typography";
import { AppDiaglog } from "./common/components/customized/AppDialog";
import InputField from "./common/components/customized/InputField";
import AppSelect from "./common/components/customized/AppSelect";
import AppMultiSelect from "./common/components/customized/AppMultiSelect";

function App() {
  const [name, setName] = React.useState("");
  const [skills, setSkills] = React.useState<number[]>([]);
  const [gender, setGender] = React.useState<number>();
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
  };
  return (
    <>
      <div className="flex gap-4 items-center">
        <Button variant="outline" size="lg" onClick={() => setDialogOpen(true)}>
          Open Dialog
        </Button>
      </div>
       <InputField
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={setName}
      />
      <AppSelect
        label="Gender"
        options={[
          { label: "Male", value: "1" },
          { label: "Female", value: "2" },
          { label: "Other", value: "3" },
        ]}
        placeholder="Select Gender"
        value={gender}
        onChange={setGender}
      />
      <AppMultiSelect
        label="Skills"
        options={[
          { label: "C#", value: "1" },
          { label: "Dotnet", value: "2" },
          { label: "React", value: "3" },
        ]}
        placeholder="Select Skills"
        value={skills}
        onChange={setSkills}
      />
      <Typography variant="h2">Vite + React</Typography>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <AppDiaglog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        title="Weather Forecast"
        confirmText="OK"
        cancelText="Cancel"
        onConfirm={onConfirm}
      />
    </>
  );
}

export default App;
