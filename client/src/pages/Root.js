import { Link } from "react-router-dom";

export function RootPage(props) {
  return (
    <>
      <div className="content has-text-centered">
        <h2 className="title is-3 is-syuji">説明</h2>
        <p>問題は15問です</p>
        <p>上の句が出題されるので適切な下の句を選んでください</p>
        <p className="has-text-danger">ログインをしないとランキングには反映されません</p>
        <p>ランキング上位を狙ってみてください！</p>
      </div>
      
      <div className="content has-text-centered">
        <Link className="button is-danger is-medium" to="/questions">
          始める
        </Link>
      </div>

      <div className="content has-text-centered">
        <Link className="button is-danger" to="/ranking">
          ランキング
        </Link>
      </div>
    </>
  );
}