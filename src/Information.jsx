

export const personalInformation = {
    name: "John",
    address: "Smith",
    number: "(123) 456-7890",
    email: "john-smith@email.com",
}

export function schoolInformation() {
    return(
        [
            {
                id: 0,
                schoolName: "Casino University",
                degree: "Bachelors in Biology",
                startDate: "Aug. 2020",
                endDate: "May 2024",
                location: "Las Vegas, Nevada",
            },
            {
                id: 1,
                schoolName: "School University",
                degree: "Masters in English",
                startDate: "Sep. 2024",
                endDate: "present",
                location: "Austin, Texas",
            }
        ]
    )
}

export function experienceInformation() {
    return(
        [
            {
                id: 0,
                companyName: "",
                position: "",
                startDate: "",
                endDate: "",
                location: "",
                description: "",
            },
            {
                id: 1,
                companyName: "",
                position: "",
                startDate: "",
                endDate: "",
                location: "",
                description: "",
            }
        ]
    )
}

export function skillsInformation() {
    return(
        [
            {id: 0, name: ""},
            {id: 1, name: ""}
        ]
    )
}