import { useState } from 'react'

const REGEX_RULE = {
  id: /^[a-z0-9_]{4,20}$/,
  email: /^[\w]([-_.]?[0-9a-zA-Z])*@[\w]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  nickanme: /^[가-힣a-zA-Z0-9]+$/,
  password: /^[a-zA-Z0-9{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"].{8,16}$/,
}

const inputName = {
  id: '아이디',
  email: '이메일',
  nickanme: '닉네임',
  password: '비밀번호',
  repassword: '비밀번호 확인',
}

type InputType = 'email' | 'id' | 'password' | 'repassword' | 'nickanme'

export default (
  inputValue: string,
  type: InputType,
  chk_password?: string,
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, string, boolean] => {
  const [value, setValue] = useState(inputValue)
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
  console.log(1)

  let msg = ''

  // empty check
  if (value === '') {
    msg = `${inputName[type]} 항목은 필수로 입력하셔야 합니다.`
    return [value, onChangeValue, msg, false]
  }

  // repassword duplicate check
  if (type === 'repassword') {
    if (value !== chk_password) {
      console.log(chk_password)
      msg = `비밀번호가 동일하지 않습니다`
      return [value, onChangeValue, msg, false]
    }
    console.log(value)
    return [value, onChangeValue, msg, true]
  }

  // regex check
  if (!REGEX_RULE[type].test(value)) {
    msg = `형식에 맞게 "${type}" 항목을 작성해주세요.`
    console.log(value)
    return [value, onChangeValue, msg, false]
  }

  return [value, onChangeValue, msg, true]
}
