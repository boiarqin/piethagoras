export default function handler(req, res) {
    res.status(200).json({
        data: [
            {
                id: 1,
                firstName: 'Phillip',
                lastName: 'Fry',
                jobTitle: 'Delivery',
                schedule: ['Thu', 'Fri', 'Sat', 'Sun']
            },
            {
                id: 2,
                firstName: 'Jimmy',
                lastName: 'Pesto',
                jobTitle: 'Manager',
                schedule: ['Tue', 'Thu', 'Fri', 'Sat']
            },
            {
                id: 3,
                firstName: 'Jimmy Jr',
                lastName: 'Pesto',
                jobTitle: 'Assistant Manager',
                schedule: ['Mon', 'Wed', 'Sun']
            },
            {
                id: 4,
                firstName: 'Andy',
                lastName: 'Pesto',
                jobTitle: 'Pizza Artist',
                schedule: ['Mon', 'Tue', 'Wed']
            },
            {
                id: 5,
                firstName: 'Ollie',
                lastName: 'Pesto',
                jobTitle: 'Pizza Artist',
                schedule: ['Thu', 'Fri']
            },
            {
                id: 6,
                firstName: 'Kat',
                lastName: 'Araujo',
                jobTitle: 'Assistant Manager',
                schedule: ['Mon', 'Tue', 'Thu', 'Fri']
            },
            {
                id: 7,
                firstName: 'Daisy',
                lastName: 'Araujo',
                jobTitle: 'Pizza Artist',
                schedule: ['Tue', 'Thu', 'Fri']
            },
            {
                id: 8,
                firstName: 'Jojo',
                lastName: 'Barbosa',
                jobTitle: 'Pizza Artist',
                schedule: ['Fri', 'Sat', 'Sun']
            },
            {
                id: 9,
                firstName: 'Turanga',
                lastName: 'Leela',
                jobTitle: 'Delivery',
                schedule: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat',]
            },
            {
                id: 10,
                firstName: 'Bender',
                lastName: 'Rodriguez',
                jobTitle: 'Delivery',
                schedule: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
        ]
    })
}
