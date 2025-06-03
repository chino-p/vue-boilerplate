import CryptoJS from 'crypto-js'

/**
 * 随机生成32位的字符串
 */
const generateRandomString = (): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = characters.length
  for (let i = 0; i < 32; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

/**
 * 随机生成aes 密钥
 */
export const generateAesKey = (): string => {
  return CryptoJS.enc.Utf8.parse(generateRandomString()).toString()
}

/**
 * 加密base64
 */
export const encryptBase64 = (str: CryptoJS.lib.WordArray): string => {
  return CryptoJS.enc.Base64.stringify(str)
}

/**
 * 解密base64
 */
export const decryptBase64 = (str: string) => {
  return CryptoJS.enc.Base64.parse(str)
}

/**
 * 使用密钥对数据进行加密
 */
export const encryptWithAes = (message: string, aesKey: CryptoJS.lib.WordArray): string => {
  const encrypted = CryptoJS.AES.encrypt(message, aesKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.toString()
}

/**
 * 使用密钥对数据进行解密
 */
export const decryptWithAes = (message: string, aesKey: CryptoJS.lib.WordArray): string => {
  const decrypted = CryptoJS.AES.decrypt(message, aesKey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return decrypted.toString(CryptoJS.enc.Utf8)
}

function demo() {
  // (1) 生成一个 16 字节的 AES-128 密钥
  const rawKey = 'abffffghijklmn12abffffghijklmn12' // 正好 16 个 UTF-8 字节
  const aesKey = CryptoJS.enc.Utf8.parse(rawKey)

  // (2) 明文
  const plainText = 'Hello, 这是待加密的文本！'

  // (3) 加密
  const cipherText = encryptWithAes(plainText, aesKey)
  console.log('Cipher (Base64)：', cipherText)
  // 可能输出："3OzKX+YJt4z6+9qJ5d+Gcw=="

  // (4) 解密
  const decryptedText = decryptWithAes(cipherText, aesKey)
  console.log('Decrypted (UTF8)：', decryptedText)
  // 输出应为："Hello, 这是待加密的文本！"
}

demo()
