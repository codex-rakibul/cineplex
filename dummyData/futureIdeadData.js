export const users = [
  {
    userId: "ufhrguhrohgrh123",
    userName: "sony123",
    fullName: "Rakibul Islam Sony",
    gender: "male",
    dateOfBirth: "06-01-2000",
    password: "R385456916@sdffg",
    email: "sony@gmail.com",
    image:
      "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/330385579_218641000678253_7500246096659885133_n.jpg?",
    coverImage:
      "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/330385579_218641000678253_7500246096659885133_n.jpg?",
    phoneNumber: "01704081993",
    currentAddress: "Bogura, Bangladesh",
    country: "Bangladesh",
    role: "user",
    status: "inactive",
    ticketBooking: [
      {
        ticketId: "giuwuw123",
        date: "06-06-23",
        time: "3.00pm",
        movieName: "ABC",
        theaterName: "Cineplex BD",
        seatsNo: ["A1", "A2", "A3", "A4"],
        totalPrice: 1200,
      },
      {
        ticketId: "giuwuw1234",
        date: "06-06-23",
        time: "3.00pm",
        movieName: "ABC",
        theaterName: "Cineplex BD",
        theaterName: "Cineplex BD",
        seatsNo: ["A1", "A2", "A3", "A4"],
        totalPrice: 1200,
      },
    ],
    review: [
      {
        reviewId: "giuwuw123",
        movieName: "ABC",
        theaterName: "Cineplex BD",
        comment: "This is a review",
        ratting: "5",
      },
      {
        reviewId: "giuwuw1234",
        movieName: "ABC",
        theaterName: "Cineplex BD",
        comment: "This is a review",
        ratting: "5",
      },
    ],
  },

  // similar to the all users---------------------------------------------------
];

export const theaterAdmin = [
  {
    userId: "ufhrguhrohgrh123",
    userName: "sony123",
    fullName: "Rakibul Islam Sony",
    gender: "male",
    dateOfBirth: "06-01-2000",
    password: "R385456916@sdffg",
    email: "sony@gmail.com",
    image:
      "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/330385579_218641000678253_7500246096659885133_n.jpg?",
    coverImage:
      "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/330385579_218641000678253_7500246096659885133_n.jpg?",
    phoneNumber: "01704081993",
    currentAddress: "Bogura, Bangladesh",
    country: "Bangladesh",
    role: "admin",
    status: "inactive",
    theaterName: "cineplex BD",
    theaterAddress: "Bogura,Bangladesh",
    seatPattern: "A100",
    seatType: "yes",
    timeShedules: ["12.00pm", "3.00pm", "6.00pm", "9.00pm"],

    runningMovie: [
      {
        movieId: "fdgvwuifg12",
        movieName: "ABCD",
        desc: "jfhjghoirhgiorilhih irhgiorgsriphgpir",
        showTime: "2.22mins",
        Director: "Siddharth Anand",
        Writers: "rgmfas",
        actors: ["A", "B", "C", "D"],
        coverImage: "../img",
        movieTrailer: "../video",
        totalRating: 1000,
        totalVisitors: 1000,
        startDate: "06-06-23",
        endDate: "30-06-23",
        someOfMoviePgotos: [
          {
            photoId: 1,
            url: "fknk",
            alt: "",
          },
          {
            photoId: 2,
            url: "fknk",
            alt: "",
          },
          {
            photoId: 3,
            url: "fknk",
            alt: "",
          },
        ],
        showTime: [
          {
            id: 1,
            time: "12.00pm",
            seatPattern: "A100",
            ///here all seat number and checking booking information
          },
          {
            id: 2,
            time: "6.00pm",
            seatPattern: "A100",
            ///here all seat number and checking booking information
          },
        ],
        reviews: [
          {
            id: 1,
            userId: "wehyrifugequ12",
            name: "ABCD",
            comment: "Good",
            ratting: "5",
            date: "06-06-23",
            time: "",
            userImage:"../img",
          },
          {
            id: 2,
            userId: "wehyrifugequ12",
            name: "ABCD 2",
            comment: "averege",
            ratting: "4",
            date: "06-06-23",
            time: "",
            userImage:"../img",
          },
        ],
        ticketBooking:[
          {
            userId: "wehyrifugequ12",
            name:"ABCD",
            Address:"",
            userImage:"",
            totalSeats:["A1,B1,C1,D1"],
            totalPrice:1200,
            date:"",
            showTime:"",
          },
          {
            userId: "wehyrifugequ12",
            name:"ABCD",
            Address:"",
            userImage:"",
            totalSeats:["A1,B1,C1,D1"],
            totalPrice:1200,
            date:"",
            showTime:"",
          }
        ],
      },
    ],
    upcommingMovie: [],
    visitor: [
      {
        userId: "ufhrguhrohgrh123",
        userName: "sony123",
        fullName: "Rakibul Islam Sony",
        ticketBooking: [
          {
            ticketId: "giuwuw123",
            date: "06-06-23",
            time: "3.00pm",
            movieName: "ABC",
            theaterName: "Cineplex BD",
            seatsNo: ["A1", "A2", "A3", "A4"],
            totalPrice: 1200,
          },
          {
            ticketId: "giuwuw1234",
            date: "06-06-23",
            time: "3.00pm",
            movieName: "ABC",
            theaterName: "Cineplex BD",
            theaterName: "Cineplex BD",
            seatsNo: ["A1", "A2", "A3", "A4"],
            totalPrice: 1200,
          },
        ],
        review: [
          {
            reviewId: "giuwuw123",
            movieName: "ABC",
            theaterName: "Cineplex BD",
            comment: "This is a review",
            ratting: "5",
          },
          {
            reviewId: "giuwuw1234",
            movieName: "ABC",
            theaterName: "Cineplex BD",
            comment: "This is a review",
            ratting: "5",
          },
        ],
      },
    ],
  },
  // similar to the all Theater Admin---------------------------------------------------
];
