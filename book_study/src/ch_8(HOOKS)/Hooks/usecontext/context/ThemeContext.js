import { createContext } from "react";

//프로바이더로 props로 넘겨주지않았을때 초기값을 받아올수있다.
//ThemeContext.Provider value <-이걸로 최상위컴포넌트를 감싸게되면
//모든 자식들은 value로 넘어간 상태값을 사용할수있다.
export const ThemeContext = createContext(null);
