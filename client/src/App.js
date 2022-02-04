import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { RootPage } from "./pages/Root.js";
import { QuestionPage } from "./pages/Question.js";
import { RankingPage } from "./pages/Ranking.js";

function AuthButton() {
  const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  function handleClickLoginButton() {
    loginWithRedirect({
      appState: {
        path: window.location.pathname,
      },
    });
  }

  function handleClickLogoutButton() {
    logout({
      localOnly: true,
    });
  }

  if (isLoading) {
    return (
      <button className="button is-warning is-inverted is-outlined is-loading">
        Loading
      </button>
    );
  }
  if (isAuthenticated) {
    return (
      <button
        className="button is-warning is-inverted is-outlined"
        onClick={handleClickLogoutButton}
      >
        ログアウト
      </button>
    );
  }
  return (
    <button
      className="button is-warning is-inverted is-outlined"
      onClick={handleClickLoginButton}
    >
      ログイン
    </button>
  );
}

function Header() {
  return (
    <section className="hero is-danger">
      <div className="hero-body">
        <div className="columns">
          <div className="column">
            <h1 className="title is-2 has-text-black-bis is-syuji">百人一首道場</h1>
          </div>
          <div className="column block has-text-right">
            <AuthButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer has-background-danger-light">
      <div className="content has-text-centered">
        <p>
        ©  5420084 東直輝
        </p>
        <p>
          一部のフォントは<a href="https://fonts.google.com/">Googleフォント</a>
          の<a href="https://fonts.google.com/specimen/Yuji+Syuku?subset=japanese">Yuji Syuku</a>を使用しています。
        </p>
      </div>
    </footer>
  );
}

export function App(props) {
  return (
    <Router>
      <Header />
      <section className="section">
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <RootPage />
            </Route>
            <Route path="/questions" exact>
              <QuestionPage />
            </Route>
            <Route path="/ranking" exact>
              <RankingPage />
            </Route>
          </Switch>
        </div>
      </section>
      <Footer />
    </Router>
  );
}