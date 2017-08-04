import React from 'react';

export default function markdown(text) {
  const bold = '**';
  let ocurr = 0;
  let keyCount = 0;

  const retorno = new Set();
  retorno.add(
    text.split(bold).reduce((valorAnterior, valorAtual, indice) => {
      if (!indice) {
        return [valorAtual];
      }
      if (ocurr === 2) ocurr = 0;
      ocurr++;
      return valorAnterior.concat(
        ocurr === 1
          ? <b key={keyCount++} style={{ color: 'red' }}>
            {valorAtual}
          </b>
          : valorAtual,
      );
    }, []),
  );

  return retorno;
}
