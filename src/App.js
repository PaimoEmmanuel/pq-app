import AppRouter from "./routes/AppRouter";
import UserContextProvider from "./contexts/UserContext";
import SubjectContextProvider from "./contexts/SubjectContext";
import ExamTypeContextProvider from "./contexts/examTypeContext";
import YearContextProvider from "./contexts/YearContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <ExamTypeContextProvider>
          <YearContextProvider>
            <SubjectContextProvider>
              <AppRouter />
            </SubjectContextProvider>
          </YearContextProvider>
        </ExamTypeContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
