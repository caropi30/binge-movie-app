import { useState } from "react";
import "./scss/app/app.scss";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { NavigationBar } from "./components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header>
          <NavigationBar />
        </Header>
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
