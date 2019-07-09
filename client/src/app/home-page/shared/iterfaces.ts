export interface erpMenu  {
    name: string,
    activeClass: boolean,
    type: string[],
    img: string,
    prompt: string
    children?: erpMenu[]
}

export interface tab {
    name: string,
    active: boolean,
    code: string
}

export interface slide {
    name: string,
    activeClass: boolean
}
