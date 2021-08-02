type Landlord = {
    id: number,
    propertyManagement: string,
    rating: number
}

type Review = {
    landlordID: number,
    propertyAddress: string,
    rent: number,
    comment: string
}

type User = {
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string
}

