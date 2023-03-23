class Post {
    constructor(id, picture, username, time, body, comments) {
        this.id = id;
        this.picture = picture;
        this.username = username;
        this.time = time;
        this.body = body;
        this.comments = comments;

    }
}

let posts = [
    new Post(
        1,
        "https://picsum.photos/200/300",
        "John Doe",
        new Date( 2020, 1, 1, 12, 0, 0, 0),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        [
                new Post(
                    2,
                    "https://picsum.photos/200/300",
                    "Jane Doe",
                    new Date( 2020, 1, 1, 12, 0, 0, 0),
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                    []
                )
        ]

    ),
    new Post(
        3,
        "https://picsum.photos/200/300",
        "Jaasdne Doe",
        new Date( 2020, 1, 1, 12, 0, 0, 0),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        []
    ),
    new Post(
        4,
        "https://picsum.photos/200/300",
        "Johsdfasdfn Doe",
        new Date( 2020, 1, 1, 12, 0, 0, 0),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        [
            new Post(
                5,
                "https://picsum.photos/200/300",
                "Jansdfsdfe Doe",
                new Date( 2020, 1, 1, 12, 0, 0, 0),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            ),
            new Post(
                6,
                "https://picsum.photos/200/300",
                "Jane Dsdfsdfoe",
                new Date( 2020, 1, 1, 12, 0, 0, 0),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            )

        ]),
    new Post(
        7,
        "https://picsum.photos/200/300",
        "Jsadasdohsdfasdfn Doe",
        new Date( 2023, 3, 1, 12, 0, 0, 23),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        [
            new Post(
                8,
                "https://picsum.photos/200/300",
                "Jansdfsdfe Doesda",
                new Date( 2023, 1, 1, 12, 0, 0, 0),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            ),
            new Post(
                9,
                "https://picsum.photos/200/300",
                "Jane Dsdfsdfoe",
                new Date( 2023, 1, 1, 12, 0, 0, 0),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            )

        ]),
    new Post(
        10,
        "https://picsum.photos/200/300",
        "Johsdfasdfn Doe",
        new Date( 2020, 1, 1, 12, 0, 0, 0),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        [
            new Post(
                11,
                "https://picsum.photos/200/300",
                "Jansdfsdfe Doe",
                new Date( 2021, 10, 10, 12, 23, 23, 23),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            )])
];

