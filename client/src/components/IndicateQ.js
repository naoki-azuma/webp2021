export function IndecateQ(props) {
    let choices = props.choices.map(value => {
        return value.simo;
    });

    choices.push(props.simo);
    choices.sort();

    const judge=(q)=>{
        if(q == props.simo){
            props.changeCorrectCount();
        }
        props.changeCount();  
    }

    return (
        <div className="content is-syuji">
            <p>{props.count+1}/15</p>
            <div className="box">
                <h2>{props.kami}</h2>
            </div>
            <div className="buttons">
            {choices.map((question) => {
              return (
                <button key={question} onClick={() => judge(question)} className="button is-medium is-fullwidth is-danger is-outlined" >{question}</button>
               );
            })}
            </div>
        </div>
    );
  }