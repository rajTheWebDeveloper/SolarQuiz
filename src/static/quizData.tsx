export interface QuizAnswer
{
    option:string,
    isCorrect:boolean
}

export interface Quiz
{
    question:string,
    options: QuizAnswer[]
}

let QuizData:Quiz[]=[
    {
        question:"Which is the biggest planet in solar system",
        options:[
            {
                option:"Saturn",
                isCorrect:false
            },
            {
                option:"Netpune",
                isCorrect:false
            },
            {
                option:"Jupiter",
                isCorrect:true
            },
            {
                option:"Mars",
                isCorrect:false
            },
        ]
    },
     {
        question:"Which is the hottest planet in solar system",
        options:[
            {
                option:"Mercury",
                isCorrect:false
            },
            {
                option:"Venus",
                isCorrect:true
            },
            {
                option:"Mars",
                isCorrect:false
            },
            {
                option:"Jupiter",
                isCorrect:false
            },
        ]
    },
     {
        question:"Which is the coldest planet in solar system",
        options:[
            {
                option:"Saturn",
                isCorrect:false
            },
            {
                option:"Netpune",
                isCorrect:true
            },
            {
                option:"Uranus",
                isCorrect:false
            },
            {
                option:"Pluto",
                isCorrect:false
            },
        ]
    },
     {
        question:"Which planet has the largest storm in the solar system",
        options:[
            {
                option:"Saturn",
                isCorrect:false
            },
            {
                option:"Netpune",
                isCorrect:false
            },
            {
                option:"Jupiter",
                isCorrect:true
            },
            {
                option:"Mars",
                isCorrect:false
            },
        ]
    },
    {
        question:"Which among the following planets has the satellite named Titan",
        options:[
            {
                option:"Saturn",
                isCorrect:true
            },
            {
                option:"Mars",
                isCorrect:false
            },
            {
                option:"Venus",
                isCorrect:false
            },
            {
                option:"Neptune",
                isCorrect:false
            },
        ]
    },
    {
    question: "Which planet is known as the Red Planet?",
    options: [
      {
        option: "Mars",
        isCorrect: true,
      },
      {
        option: "Venus",
        isCorrect: false,
      },
      {
        option: "Mercury",
        isCorrect: false,
      },
      {
        option: "Earth",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which planet is the terrestrial planet?",
    options: [
      {
        option: "Jupiter",
        isCorrect: false,
      },
      {
        option: "Mars",
        isCorrect: true,
      },
      {
        option: "Saturn",
        isCorrect: false,
      },
      {
        option: "Neptune",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which planet has the most rings?",
    options: [
      {
        option: "Saturn",
        isCorrect: true,
      },
      {
        option: "Jupiter",
        isCorrect: false,
      },
      {
        option: "Uranus",
        isCorrect: false,
      },
      {
        option: "Neptune",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which planet is closest to the Sun?",
    options: [
      {
        option: "Mercury",
        isCorrect: true,
      },
      {
        option: "Venus",
        isCorrect: false,
      },
      {
        option: "Mars",
        isCorrect: false,
      },
      {
        option: "Earth",
        isCorrect: false,
      },
    ],
  },
    {
        question:"Which planet has more number of satellites in the solar system",
        options:[
            {
                option:"Saturn",
                isCorrect:true
            },
            {
                option:"Netpune",
                isCorrect:false
            },
            {
                option:"Mars",
                isCorrect:false
            },
            {
                option:"Jupiter",
                isCorrect:false
            },
        ]
    }
]



export default QuizData