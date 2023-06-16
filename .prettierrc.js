module.exports = {
  proseWrap: 'never',
  // (prop) => {}
  // 화살표 함수에 파라미터가 1개라도
  arrowParens: 'always',

  //  <button
  //    props="value">
  //  <button
  //    props="value"
  //  >
  bracketSameLine: false,

  //  { p1: 'asdf' }
  //  {p1: 'asdf'}
  //  오브젝트만 적용, 배열 X
  //
  bracketSpacing: true,

  //  파일 맨 뒤에 엔터 (운영체제에 따라 autoscan 가능)
  endOfLine: 'auto',

  //  JSX 내에서의 작은따옴표 <a href='/home'> <a href="/home">
  jsxSingleQuote: false,

  //  코드 항상 뒤에 ; 사용 여부
  semi: false,

  //  JS 코드에서의 따옴표 '토트넘' "토트넘"
  singleQuote: true,

  //  스페이스 개수
  tabWidth: 2,

  //  {
  //    p1,
  //    p2,
  //    p3,
  //  }
  //  { p1, p2, p3 }
  trailingComma: 'all',

  //  일정 길이보다 크면 강제 엔터 처리
  printWidth: 100,

  // \t 탭문자인지 \s 스페이스인지
  useTabs: false,

  singleAttributePerLine: false,
}
