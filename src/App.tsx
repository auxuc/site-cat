import { FC } from "react";
import "./App.css";
import { Router } from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "react-query";

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
