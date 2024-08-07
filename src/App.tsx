import { Button } from '@/components/ui/button';
import { useState } from 'react';

function App() {
  const [text, setText] = useState<string>('HII');

  const handleClick = () => setText('it works!');
  return (
    <div>
      <h1>{text}</h1>
      <Button onClick={handleClick}>Click me</Button>
      <Button onClick={handleClick} variant='secondary'>
        Click me
      </Button>
    </div>
  );
}

export default App;
