import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import About from '../components/About'
import Study from '../components/Study'
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'
import StepThree from '../components/StepThree'
import StepFour from '../components/StepFour'
import StepFive from '../components/StepFive'
import StepSix from '../components/StepSix'
import StepSeven from '../components/StepSeven'
import ReducerSample from '../components/ReducerSample'
import ReducerSample2 from '../components/ReducerSample2'
import ParentComp from '../components/ParentComp'
import ContextDemoParent from '../components/demo/ContextDemoParent'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/study',
    element: <Study />,
    children: [
      {
        path: '/study/step1',
        element: <StepOne />,
      },
      {
        path: '/study/step2',
        element: <StepTwo />,
      },
      {
        path: '/study/step3',
        element: <StepThree />,
      },
      {
        path: '/study/step4',
        element: <StepFour />,
      },
      {
        path: '/study/step5',
        element: <StepFive />,
      },
      {
        path: '/study/step6',
        element: <StepSix />,
      },
      {
        path: '/study/step7',
        element: <StepSeven />,
      },
    ],
  },
  {
    path: '/reducer',
    element: <ReducerSample />,
  },
  {
    path: '/reducer2',
    element: <ReducerSample2 />,
  },
  {
    path: '/parent',
    element: <ParentComp />,
  },
  {
    path: '/context-demo',
    element: <ContextDemoParent />,
  },
])
