import { useState } from 'react'
import './App.css'
import {CallScore} from "../lib/components/CallScore";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div style={{}}>
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  {/*<img src={viteLogo} className="logo" alt="Vite logo" />*/}
              </a>
              <a href="https://react.dev" target="_blank">
                  {/*<img src={reactLogo} className="logo react" alt="React logo" />*/}
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
              <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
          <CallScore
              callScore={85}
              factors={[
                  {
                      feedback: {
                          how_could_it_be_improved: 'The participant should work on providing proper greetings and closing remarks, and avoid interrupting others during the conversation.',
                          negative: {
                              summary: 'The participant should work on providing proper greetings and closing remarks, and avoid interrupting others during the conversation.'
                          },
                          positive: {
                              summary: 'The participant was actively engaged, introduced topics, and maintained a balanced talk time.'
                          }
                      },
                      name: 'Communication and Engagement',
                      score: 80,
                      summary: 'The participant was actively engaged in the conversation, introduced topics, and maintained a balanced talk time. However, there were some interruptions and a lack of greeting and closing remarks.'
                  },
                  {
                      feedback: {
                          negative: {
                              summary: 'The participant should work on addressing all questions directed to them.'
                          },
                          positive: {
                              summary: 'The participant answered most questions and handled disagreements effectively.'
                          }
                      },
                      name: 'Question Handling',
                      score: 90,
                      summary: 'The participant answered most questions directed to them and handled disagreements well.'
                  }
              ]}
              summary="The participant performed well in both communication and engagement and question handling, with some areas for improvement."
          />
      </div>
  )
}

export default App
