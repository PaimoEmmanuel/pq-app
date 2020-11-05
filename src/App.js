import AppRouter from "./routes/AppRouter";
import UserContextProvider from "./contexts/UserContext";
import SubjectContextProvider from "./contexts/SubjectContext";
import ExamTypeContextProvider from "./contexts/examTypeContext";
import YearContextProvider from "./contexts/YearContext";
import QuestionsContextProvider from "./contexts/QuestionsContext";


function App() {
  return (
    <div>
      <UserContextProvider>
        <ExamTypeContextProvider>
          <YearContextProvider>
            <SubjectContextProvider>
              <QuestionsContextProvider>
                <AppRouter />
              </QuestionsContextProvider>
            </SubjectContextProvider>
          </YearContextProvider>
        </ExamTypeContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
