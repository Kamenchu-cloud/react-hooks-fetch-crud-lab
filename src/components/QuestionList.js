import QuestionItem from './QuestionItem'


function QuestionList({questions, onDeleteQuestion, onUpdateQuestion}) {

  return (
    <section>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => {
          return(
            <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateQuestion={onUpdateQuestion}/>
          )
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
