export interface Question {
    id: number,
    text: string,
    image?: string // ? คือ ไม่จำเป็นต้องมีก็ได้
    choices: Choices[]
}

export interface Choices{
    id: number,
    text: string,
    isAnswer: boolean
}
