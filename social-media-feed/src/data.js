
import json from "./hardCoded.json";
console.log(json);
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

export let currentPosts = JSON.parse(json);
//JSON.parse("[{\"id\":1,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"John Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[{\"id\":2,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jane Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]}]},{\"id\":3,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jaasdne Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]},{\"id\":4,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Johsdfasdfn Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[{\"id\":5,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jansdfsdfe Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]},{\"id\":6,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jane Dsdfsdfoe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]}]},{\"id\":7,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jsadasdohsdfasdfn Doe\",\"time\":\"2023-04-01T10:00:00.023Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[{\"id\":8,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jansdfsdfe Doesda\",\"time\":\"2023-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]},{\"id\":9,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jane Dsdfsdfoe\",\"time\":\"2023-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]}]},{\"id\":10,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Johsdfasdfn Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[{\"id\":11,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jansdfsdfe Doe\",\"time\":\"2021-11-10T11:23:23.023Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]}]}]");