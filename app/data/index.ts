export const courses = [
    {
        id: 1,
        title: "Data Analytics",
        category: "Technology",
        difficulty: "Beginner",
        thumbnail: 'https://plus.unsplash.com/premium_photo-1661778915982-d104c9a41fee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        instructor: {
            name: "Sarah Johnson",
            pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
        },
        rating: 4.7,
        tools: {

        }
    },
    {
        id: 2,
        title: "Data Analytics",
        description: 'Become a Data Analyst with our 3 months intensive training covering 40+ topics, 4 modules, and 5 projects that will take you from beginner to advanced.',
        category: "Technology",
        difficulty: "Intermediate",
        thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        instructor: {
            name: "Michael Chen",
            pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
        },
        rating: 4.9,
        tools: [
            {
                tool: 'Excel',
                color: 'bg-green-200 text-green-700'
            },
            {
                tool: 'SQL',
                color: 'bg-slate-200 text-slate-700'
            },
            {
                tool: 'Power BI',
                color: 'bg-yellow-200 text-yellow-700'
            },
            {
                tool: 'Github',
                color: 'bg-red-200 text-red-700'
            },
            {
                tool: 'Job/Freelance Preparation',
                color: 'bg-blue-200 text-blue-700'
            },
        ],
        duration: '3'
    },
    {
        id: 3,
        title: "Data Science",
        category: "Marketing",
        difficulty: "Advanced",
        thumbnail: 'https://plus.unsplash.com/premium_photo-1661778915982-d104c9a41fee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        instructor: {
            name: "Emily Davis",
            pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
        },
        rating: 4.8,
        description: 'Become a Data Scientist with our 4 months intensive training covering 30+ topics and hands on practical project.',
        // category: "Technology",
        tools: [
            {
                tool: 'Machine Learning',
                color: 'bg-red-200 text-red-700'
            },
            {
                tool: 'Mathematics',
                color: 'bg-yellow-200 text-yellow-700'
            },
            {
                tool: 'Python',
                color: 'bg-slate-200 text-slate-700'
            },
            {
                tool: 'Statistics',
                color: 'bg-blue-200 text-blue-700'
            },
            {
                tool: 'Sklearn',
                color: 'bg-purple-200 text-purple-700'
            },
            {
                tool: 'Github',
                color: 'bg-black text-white'
            },
        ],
        duration: '4'
    },
    {
        id: 4,
        title: "Business Intelligence",
        description: 'This program is designed to equip you with the right skills as a Business Intelligence Analyst and prepare you for jobs. Join our    3 months intensive trainning covering over 40+ topics, 5 projects.',
        category: "Technology",
        difficulty: "Intermediate",
        thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        instructor: {
            name: "Michael Chen",
            pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
        },
        rating: 4.9,
        tools: [
            {
                tool: 'Power BI',
                color: 'bg-yellow-200 text-yellow-700'
            },
            {
                tool: 'SQL',
                color: 'bg-slate-200 text-slate-700'
            },
            {
                tool: 'Problem Solving Techniques',
                color: 'bg-blue-200 text-blue-700'
            },
            {
                tool: 'Excel',
                color: 'bg-green-200 text-green-700'
            },
            {
                tool: 'Presentation, communication & Storytelling',
                color: 'bg-black text-white'
            },
        ],
        duration: '3'
    },
    {
        id: 5,
        title: "Data Analytics with Python",
        category: "Marketing",
        difficulty: "Advanced",
        thumbnail: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
        instructor: {
            name: "Emily Davis",
            pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
        },
        rating: 4.8,
        description: 'Become very proficient with Python in 3 months (12 weeks) with our detailed Python module taking you from introductory topic to machine learning for data analysis.',
        // category: "Technology",
        tools: [
            {
                tool: 'Python',
                color: 'bg-yellow-200 text-yellow-700'
            },
            {
                tool: 'Google colab',
                color: 'bg-green-200 text-green-700'
            }
        ],
        duration: '3'
    },

    {
        id: 6,
        title: "Business Analysis",
        category: "Marketing",
        difficulty: "Advanced",
        thumbnail: 'https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.webp?b=1&s=170667a&w=0&k=20&c=8HOUiG9_M3Nm2TKS-EiGI8XdZctk7502R7s8NbCTm88=',
        instructor: {
            name: "Emily Davis",
            pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
        },
        rating: 4.8,
        description: 'Are you an entry level business analyst with (0-2 years experience) (2-4 years experience) or (5 years experience) and you are looking to take the CBAP or other exams, contact us.',
        duration: '4'
    },
];