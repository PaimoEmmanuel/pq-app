import { Question } from "../components/molecules/question";

export const QuestionsPage = () => {
    return (
        <div>
            <Question number="1" question="what is a book?" options={[
                "Paimo", "Emmanuel", "Ayomide", "Oluwatosin"
            ]}/>
        </div>
    )
}