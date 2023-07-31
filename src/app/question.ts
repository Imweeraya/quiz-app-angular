//interface for obj question
//Make it to be type
export interface Question {
    id: number,
    text: string,
    image?: string // ? คือ ไม่จำเป็นต้องมีก็ได้
    choices: Choices[] //choices is Array Type Choice
}

export interface Choices{
    id: number,
    text: string,
    isAnswer: boolean
}
