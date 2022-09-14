export type addressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}

export type contactType = {
    id: string,
    name: string,
    email: string,
    address: addressType,
}

export type postType = {
    map: any
    title: string,
    body: string,
}

export type socialType = {
    id: string,
    icon: string,
    path: string,
    map: any
}