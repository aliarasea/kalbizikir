import { useCallback, useReducer } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  const reducer = useCallback(
    ({ count }: { count: number }, { type }: { type: string }) => {
      switch (type.toLowerCase()) {
        case "up": {
          return { count: count + 1 };
        }
        case "down": {
          return { count: count - 1 };
        }
        case "clear": {
          return { count: 0 };
        }
        default: {
          return { count: 0 };
        }
      }
    },
    [],
  );

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>{"kalbizikir"}</h1>
      <div className="logo">{state.count}</div>
      <div className="card">
        <button onClick={() => dispatch({ type: "up" })}>{t("UP")}</button>

        <button onClick={() => dispatch({ type: "down" })}>{t("DOWN")}</button>
      </div>
      <div className="card">
        <button onClick={() => dispatch({ type: "clear" })}>
          {t("CLEAR")}
        </button>
      </div>
    </>
  );
}

export default App;
