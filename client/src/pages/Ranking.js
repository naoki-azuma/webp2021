import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRanking } from "../api.js";
import { Loading, IndecateR } from "../components";

export function RankingPage(props) {
  const [Ranking, setRanking] = useState(null);

  useEffect(() => {
    getRanking().then((data) => {
      setRanking(data);
    });
  }, []);


  return (
    <div className="content has-text-centered">
      <h2 className="title is-3 is-syuji">上位者ランキング</h2>

      {
        (() => {
          if(Ranking==null){
            return <Loading />
        }else{
            return <IndecateR ranking={Ranking} />
        }
        })()
       }
      
      <div className="has-text-right">
        <Link className="button is-danger" to="/">
            Top
        </Link>
      </div>
    </div>
  );
}