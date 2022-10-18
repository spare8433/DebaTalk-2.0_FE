 const checkWH: (wh: string | undefined) => string = (wh) => {
  if (typeof wh === 'undefined' || wh === '' ){
    return 'auto'
  }
  if(String(wh).indexOf('%') > 0)
    return wh;
  else
    return wh + 'px';
}

export default checkWH