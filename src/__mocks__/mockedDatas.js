const mockData = [
    {
        "first-name": "John",
        "last-name": "Doe",
        "start-date": "2022-01-01",
        "department": "Engineering",
        "date-of-birth": "1990-05-15",
        "street": "123 Main Street",
        "city": "Anytown",
        "state": "NY",
        "zip-code": "12345"
    },
    {
        "first-name": "Jane",
        "last-name": "Doe",
        "start-date": "2022-02-01",
        "department": "Marketing",
        "date-of-birth": "1985-10-20",
        "street": "456 Elm Street",
        "city": "Otherville",
        "state": "CA",
        "zip-code": "54321"
    },
    {
        "first-name": "Michael",
        "last-name": "Smith",
        "start-date": "2021-12-15",
        "department": "Sales",
        "date-of-birth": "1988-03-10",
        "street": "789 Oak Avenue",
        "city": "Smalltown",
        "state": "TX",
        "zip-code": "67890"
    },
    {
        "first-name": "Emily",
        "last-name": "Johnson",
        "start-date": "2022-03-20",
        "department": "Human Resources",
        "date-of-birth": "1992-08-25",
        "street": "321 Maple Lane",
        "city": "Villageton",
        "state": "FL",
        "zip-code": "13579"
    },
    {
        "first-name": "Christopher",
        "last-name": "Brown",
        "start-date": "2022-04-05",
        "department": "Engineering",
        "date-of-birth": "1987-06-30",
        "street": "567 Pine Street",
        "city": "Metroville",
        "state": "WA",
        "zip-code": "24680"
    },
    {
        "first-name": "Sarah",
        "last-name": "Miller",
        "start-date": "2022-05-12",
        "department": "Marketing",
        "date-of-birth": "1991-09-05",
        "street": "890 Cedar Street",
        "city": "Suburbia",
        "state": "IL",
        "zip-code": "97531"
    },
    {
        "first-name": "David",
        "last-name": "Wilson",
        "start-date": "2022-06-28",
        "department": "Sales",
        "date-of-birth": "1989-04-18",
        "street": "654 Birch Lane",
        "city": "Townsville",
        "state": "MI",
        "zip-code": "80246"
    },
    {
        "first-name": "Jessica",
        "last-name": "Martinez",
        "start-date": "2022-07-10",
        "department": "Human Resources",
        "date-of-birth": "1990-12-30",
        "street": "123 Elm Street",
        "city": "Cityville",
        "state": "OH",
        "zip-code": "45783"
    },
    {
        "first-name": "John",
        "last-name": "Doe",
        "start-date": "2022-01-01",
        "department": "Engineering",
        "date-of-birth": "1990-05-15",
        "street": "123 Main Street",
        "city": "Anytown",
        "state": "NY",
        "zip-code": "12345"
    },
    {
        "first-name": "Jane",
        "last-name": "Doe",
        "start-date": "2022-02-01",
        "department": "Marketing",
        "date-of-birth": "1985-10-20",
        "street": "456 Elm Street",
        "city": "Otherville",
        "state": "CA",
        "zip-code": "54321"
    },
    {
        "first-name": "Alice",
        "last-name": "Smith",
        "start-date": "2021-12-15",
        "department": "Sales",
        "date-of-birth": "1988-03-10",
        "street": "789 Oak Avenue",
        "city": "Smalltown",
        "state": "TX",
        "zip-code": "67890"
    },
    {
        "first-name": "Melissa",
        "last-name": "Perez",
        "start-date": "2023-01-10",
        "department": "Marketing",
        "date-of-birth": "1988-06-15",
        "street": "789 Oak Avenue",
        "city": "Downtown",
        "state": "NY",
        "zip-code": "97533"
    },
    {
        "first-name": "Ryan",
        "last-name": "Torres",
        "start-date": "2023-02-15",
        "department": "Sales",
        "date-of-birth": "1995-07-20",
        "street": "456 Maple Street",
        "city": "Uptown",
        "state": "TX",
        "zip-code": "80248"
    },
    {
        "first-name": "Kevin",
        "last-name": "Lopez",
        "start-date": "2022-10-25",
        "department": "Sales",
        "date-of-birth": "1985-03-30",
        "street": "987 Cedar Lane",
        "city": "Midtown",
        "state": "TX",
        "zip-code": "80247"
    },
    {
        "first-name": "Amanda",
        "last-name": "Hernandez",
        "start-date": "2022-11-30",
        "department": "Human Resources",
        "date-of-birth": "1987-04-10",
        "street": "654 Pine Avenue",
        "city": "Outskirts",
        "state": "FL",
        "zip-code": "45784"
    },
    {
        "first-name": "Jason",
        "last-name": "Gonzalez",
        "start-date": "2022-12-05",
        "department": "Engineering",
        "date-of-birth": "1994-05-25",
        "street": "321 Elm Lane",
        "city": "Countryside",
        "state": "CA",
        "zip-code": "13580"
    },
    {
        "first-name": "Jessica",
        "last-name": "Martinez",
        "start-date": "2022-07-10",
        "department": "Human Resources",
        "date-of-birth": "1990-12-30",
        "street": "123 Elm Street",
        "city": "Cityville",
        "state": "OH",
        "zip-code": "45783"
    },
    {
        "first-name": "Daniel",
        "last-name": "Garcia",
        "start-date": "2022-08-15",
        "department": "Engineering",
        "date-of-birth": "1986-01-20",
        "street": "456 Oak Street",
        "city": "Downtown",
        "state": "CA",
        "zip-code": "24681"
    },
    {
        "first-name": "Emma",
        "last-name": "Rodriguez",
        "start-date": "2022-09-20",
        "department": "Marketing",
        "date-of-birth": "1993-02-15",
        "street": "789 Maple Street",
        "city": "Uptown",
        "state": "NY",
        "zip-code": "97532"
    },
    {
        "first-name": "David",
        "last-name": "Guetta",
        "start-date": "2019-11-28",
        "department": "Sales",
        "date-of-birth": "1997-04-18",
        "street": "984 Birch Lane",
        "city": "DownTownsville",
        "state": "MI",
        "zip-code": "86246"
    },
];


export default mockData;