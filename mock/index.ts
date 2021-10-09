import Mock from 'mockjs'

type MsgType = string | number
interface ResultType {
  code: number
  msg: MsgType
  data?: unknown
}

const success = (msg: MsgType = '', data?: unknown): ResultType => {
  return {
    code: 0,
    msg,
    data
  }
}
const error = (code: number, msg: MsgType = '', data?: unknown): ResultType => {
  // 再定义一个返回错误状态的方法，一个必传参数是code，即错误码
  return {
    code,
    msg,
    data
  }
}
interface PostResInterface {
  body: string
  type: 'POST'
  url: string
}
const loginRes = (req: PostResInterface): ResultType => {
  const { username, password } = JSON.parse(req.body)
  if (username === 'admin' && String(password) === '123456') {
    return success()
  } else {
    return error(1001, '用户名或密码错误')
  }
}

export function useMock() {
  console.log('mock')
  Mock.mock(/\/api\/user\/login/, loginRes)
}
