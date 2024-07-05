import React, { useState } from 'react';

function AltenadorDeTexto() {
  const [isFirstText, setIsFirstText] = useState(true);

  return (
    <div>
      <p>{isFirstText ? 'Texto 1' : 'Texto 2'}</p>
      <button onClick={() => setIsFirstText(!isFirstText)}>
        Alternar Texto
      </button>
    </div>
  );
}

export default AltenadorDeTexto;