import { Questions } from "@/types/Questions"

type Props = {
    questions:Questions[],
    answers: number[]
}



export const Results = ({questions,answers}:Props) => {
    return(
        <div>{questions.map((item,key) => (
            <div key={key} className="mb-3">
                <div className="font-bold">{key + 1}. {item.question}</div>
                <div>
                    <span>({item.answer === answers[key] ? 'Acertou' : 'Errou'}) -</span>
                    {item.options[item.answer]}
                </div>
            </div>
        ))}</div>
    )
}