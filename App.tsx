import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Main } from "./components/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <Main />
      </StrictMode>
    </QueryClientProvider>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));
