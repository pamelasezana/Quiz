import { Questions } from "@/types/Questions"
import { useState } from "react";

type Props = {
    question: Questions;
    count:number;
    onAnswer:(answer:number) => void;
}


export const QuestionItem = ({question,count,onAnswer}:Props) => {

    const[selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const checkQuestion = (key:number) => { //isso e pro usuario nao ficar trocando de alternativa
        if (selectedAnswer === null) {
            setSelectedAnswer(key);

            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null) //ele precisa estar zerado pra proxima pergunta
            }, 1000); //2segundos

            
        }
    }

    return(
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>{question.options.map((item,key) =>
                <div key={key} onClick={() => checkQuestion(key)}
                className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 hover:opacity-50
                
                    ${selectedAnswer !== null && 'cursor:auto hover:opacity-100'}
                     ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-300'}

                      ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-300'}
                `}>
                    {item}
                </div>
            )}</div>
        </div>
    )
}