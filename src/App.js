import AppRouter from "./routes/AppRouter";
import UserContextProvider  from "./contexts/UserContext";
import SubjectContextProvider  from "./contexts/SubjectContext";

function App() {
  return (
    <div>
    <UserContextProvider>
      <SubjectContextProvider>
        <AppRouter />
      </SubjectContextProvider>
    </UserContextProvider>
    </div>
  );
}

export default App;
