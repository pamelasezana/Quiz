'use client'


import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";




const Page = () => {
  const title = 'Quiz de Culinária';

  //aqui foi criado um state pra salvar as respostas que foram dadas em um array

  const[answers,setAnswers] = useState<number[]>([]);

  //aqui crio um state pra caso as perguntas terem acabado, aparece o resultado
  const[showResult,setShowResult] = useState(false);

  //criando a nova funcao loadNextQuestion
  const loadNextQuestion = () => {
    //verifica se existe uma nova pergunta
    if(questions[currentQuestion + 1]){
      setCurrentQuestion(currentQuestion + 1)
    }
    else {
      setShowResult(true);
    }
  }

  //quando essa funcao receber a resposta atual, ela vai mandar pra proxima pergunta
  const handleAnswered = (answer:number) => {
    //pega resposta e salva no historico
    setAnswers([...answers, answer]); //dupliquei answers e coloquei tbm a nova resposta

    //agora vamos carregar a proxima pergunta
    loadNextQuestion();
  }


  //criar uma state pra saber qual e a pergunta atual
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //btn reiniciar quiz

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }


  return(
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult && <QuestionItem 
         question={questions[currentQuestion]} count={currentQuestion +1} onAnswer={handleAnswered}

         />}
        {showResult && 
        <Results questions={questions} answers={answers}  />
        }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult && `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`}
          
          {showResult && 
            <button className="px-3 py-2 rounded-md bg-blue-800 text-white" onClick={handleRestartButton}>Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Page;