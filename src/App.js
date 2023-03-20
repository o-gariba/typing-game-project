import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

async function getRandomWord() {
  const rawResponse = await axios(
    {
      method: 'GET',
      url: 'https://random-word-api.herokuapp.com/word?lang=en',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {}
    }
  )
  const word = rawResponse.data[0]
  if (typeof word === 'string')
    return word
  else getRandomWord()
}

function checkIfTypingIsCorrect(randomWord, typedWord) {
  if (randomWord === typedWord) {
    return true
  } else {
    return false
  }
}

function App() {

  const [apiRandomWord, setApiRandomWord] = useState('')

  useEffect(() => {
    (async () => {
      const randomWord = await getRandomWord()
      setApiRandomWord(randomWord)
    })();
  }, [])

  useEffect(() => {
    if (apiRandomWord) {
      setRandomWord(apiRandomWord)
      document.querySelector('input').focus()
    }
  }, [apiRandomWord])

  const [typedCharacters, setTypedCharacters] = useState('')

  const [randomWord, setRandomWord] = useState('loading...')

  useEffect(() => {
    if (checkIfTypingIsCorrect(randomWord, typedCharacters)) {
      document.querySelector('input').value = ''
      setTypedCharacters('')
      setRandomWord('loading next word...')
      setPoints(points + 1)
      async function getAnotherWord() {
        setApiRandomWord(await getRandomWord())
      }
      getAnotherWord()
    }
  }, [typedCharacters])

  const [points, setPoints] = useState(0)

  return (
    <div className="App" >
      <h1>Typing Game</h1>
      <p>Random word: {randomWord}</p>
      <p>Points: {points}</p>
      <input
        type="text"
        onChange={(e) => setTypedCharacters(e.target.value)}
        style={{ opacity: 0 }}
      />
    </div>
  );
}

export default App;
