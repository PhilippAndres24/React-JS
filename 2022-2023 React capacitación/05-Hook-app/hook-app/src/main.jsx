import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom'
// import { TodoApp } from './08-useReducer/TodoApp';
// import { Padre } from './07-tarea-memo/Padre';
// import { CallBackHook } from './06-memorize/CallBackHook';
// import { MemoHook } from './06-memorize/MemoHook';
// import { Memorize } from './06-memorize/Memorize';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { FormConCustomHooks } from './02-useEffect/FormConCustomHooks';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import CounterApp from './01-usestate/CounterApp';
// import  {CounterWithCustomHook}  from './01-usestate/CounterWithCustomHooks';
// import './08-useReducer/intro-reducer';



import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
// 
// {/* <HooksApp /> */}
// {/* <CounterApp /> */}
// {/* <CounterWithCustomHook /> */}
// {/* <SimpleForm /> */}
// {/* <FormConCustomHooks /> */}
// {/* <MultipleCustomHooks /> */}
// {/* <FocusScreen /> */}
// {/* <Layout /> */}
// {/* <Memorize /> */}
// {/* <MemoHook /> */}
// {/* <CallBackHook /> */}
// {/* <Padre /> */}
// {/* <TodoApp /> */}