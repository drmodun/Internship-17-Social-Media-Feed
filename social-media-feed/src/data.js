
import json from "./hardCoded.json";
//console.log(json);
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

let curPosts = [
    new Post(
        1,
        "https://picsum.photos/200/300",
        "John Doe",
        new Date(2020, 1, 1, 12, 0, 0, 0),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        [
            new Post(
                2,
                "https://picsum.photos/200/300",
                "Jane Doe",
                new Date(2020, 1, 1, 12, 0, 0, 0),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            )
        ]

    ),
    new Post(
        3,
        "https://picsum.photos/200/300",
        "Jaasdne Doe",
        new Date(2020, 1, 1, 12, 0, 0, 0),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        []
    ),
    new Post(
        4,
        "https://picsum.photos/200/300",
        "Johsdfasdfn Doe",
        new Date(2020, 1, 1, 12, 0, 0, 0),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        [
            new Post(
                5,
                "https://picsum.photos/200/300",
                "Jansdfsdfe Doe",
                new Date(2020, 1, 1, 12, 0, 0, 0),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            ),
            new Post(
                6,
                "https://picsum.photos/200/300",
                "Jane Dsdfsdfoe",
                new Date(2020, 1, 1, 12, 0, 0, 0),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            )

        ]),
    new Post(
        7,
        "https://picsum.photos/200/300",
        "Jsadasdohsdfasdfn Doe",
        new Date(2023, 3, 1, 12, 0, 0, 23),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        [
            new Post(
                8,
                "https://picsum.photos/200/300",
                "Jansdfsdfe Doesda",
                new Date(2023, 1, 1, 12, 0, 0, 0),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            ),
            new Post(
                9,
                "https://picsum.photos/200/300",
                "Jane Dsdfsdfoe",
                new Date(2023, 1, 1, 12, 0, 0, 0),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            )

        ]),
    new Post(
        10,
        "https://picsum.photos/200/300",
        "Johsdfasdfn Doe",
        new Date(2020, 1, 1, 12, 0, 0, 0),
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
        [
            new Post(
                11,
                "https://picsum.photos/200/300",
                "Jansdfsdfe Doe",
                new Date(2021, 10, 10, 12, 23, 23, 23),
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam",
                []
            )])
];
//"[{\"id\":1,\"username\":\"Nessa\",\"body\":\"maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus\",\"time\":\"2020-03-02T19:07:00Z\",\"picture\":\"http://dummyimage.com/222x100.png/ff4444/ffffff\",\"comments\":[{\"id\":2,\"username\":\"Clem\",\"body\":\"at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent\",\"time\":\"2007-01-09T03:30:45Z\",\"picture\":\"http://dummyimage.com/207x100.png/5fa2dd/ffffff\"},{\"id\":3,\"username\":\"Susannah\",\"body\":\"at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem\",\"time\":\"2015-09-08T07:31:01Z\",\"picture\":\"http://dummyimage.com/244x100.png/cc0000/ffffff\"}]},{\"id\":4,\"username\":\"Lonnard\",\"body\":\"eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus\",\"time\":\"2020-05-03T10:33:56Z\",\"picture\":\"http://dummyimage.com/175x100.png/cc0000/ffffff\",\"comments\":[]},{\"id\":5,\"username\":\"Ulick\",\"body\":\"morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id\",\"time\":\"2011-03-20T00:38:56Z\",\"picture\":\"http://dummyimage.com/113x100.png/cc0000/ffffff\",\"comments\":[]},{\"id\":6,\"username\":\"Sim\",\"body\":\"ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam\",\"time\":\"2014-04-02T18:52:54Z\",\"picture\":\"http://dummyimage.com/135x100.png/dddddd/000000\",\"comments\":[]},{\"id\":7,\"username\":\"Robinson\",\"body\":\"neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet\",\"time\":\"2002-11-09T18:28:16Z\",\"picture\":\"http://dummyimage.com/170x100.png/ff4444/ffffff\",\"comments\":[{\"id\":8,\"username\":\"Dael\",\"body\":\"volutpat dui maecenas tristique est et tempus semper est quam\",\"time\":\"2018-09-21T03:07:03Z\",\"picture\":\"http://dummyimage.com/102x100.png/cc0000/ffffff\"}]},{\"id\":9,\"username\":\"Ulrica\",\"body\":\"curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at\",\"time\":\"2020-12-20T09:10:00Z\",\"picture\":\"http://dummyimage.com/146x100.png/5fa2dd/ffffff\",\"comments\":[]},{\"id\":10,\"username\":\"Dukie\",\"body\":\"cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis\",\"time\":\"2010-10-14T22:49:43Z\",\"picture\":\"http://dummyimage.com/158x100.png/cc0000/ffffff\",\"comments\":[]},{\"id\":11,\"username\":\"Letisha\",\"body\":\"praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat\",\"time\":\"2021-04-13T17:04:05Z\",\"picture\":\"http://dummyimage.com/245x100.png/dddddd/000000\",\"comments\":[{\"id\":12,\"username\":\"Meade\",\"body\":\"consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut\",\"time\":\"2015-09-14T03:17:50Z\",\"picture\":\"http://dummyimage.com/136x100.png/cc0000/ffffff\"}]},{\"id\":13,\"username\":\"Malena\",\"body\":\"in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat\",\"time\":\"2017-03-12T22:54:03Z\",\"picture\":\"http://dummyimage.com/221x100.png/5fa2dd/ffffff\",\"comments\":[{\"id\":14,\"username\":\"Clem\",\"body\":\"at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent\",\"time\":\"2007-01-09T03:30:45Z\",\"picture\":\"http://dummyimage.com/207x100.png/5fa2dd/ffffff\"},{\"id\":15,\"username\":\"Susannah\",\"body\":\"at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem\",\"time\":\"2015-09-08T07:31:01Z\",\"picture\":\"http://dummyimage.com/244x100.png/cc0000/ffffff\"}]},{\"id\":16,\"username\":\"Fairleigh\",\"body\":\"quis odio consequat varius integer ac leo pellentesque ultrices mattis odio\",\"time\":\"2004-08-05T03:35:22Z\",\"picture\":\"http://dummyimage.com/171x100.png/dddddd/000000\",\"comments\":[]},{\"id\":17,\"username\":\"Callean\",\"body\":\"dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et\",\"time\":\"2009-07-09T09:33:20Z\",\"picture\":\"http://dummyimage.com/183x100.png/ff4444/ffffff\",\"comments\":[]},{\"id\":18,\"username\":\"Brandi\",\"body\":\"et eros vestibulum ac est lacinia nisi venenatis tristique fusce\",\"time\":\"2006-10-14T21:06:22Z\",\"picture\":\"http://dummyimage.com/238x100.png/5fa2dd/ffffff\",\"comments\":[]},{\"id\":19,\"username\":\"Lucien\",\"body\":\"consequat dui nec nisi volutpat eleifend donec ut dolor morbi\",\"time\":\"2021-04-01T09:07:04Z\",\"picture\":\"http://dummyimage.com/133x100.png/dddddd/000000\",\"comments\":[]},{\"id\":20,\"username\":\"Neely\",\"body\":\"felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel\",\"time\":\"2008-05-08T16:23:04Z\",\"picture\":\"http://dummyimage.com/129x100.png/5fa2dd/ffffff\",\"comments\":[{\"id\":21,\"username\":\"Lorrie\",\"body\":\"nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet\",\"time\":\"2017-03-12T22:54:03Z\",\"picture\":\"http://dummyimage.com/221x100.png/5fa2dd/ffffff\"},{\"id\":22,\"username\":\"Lorrie\",\"body\":\"nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet\",\"time\":\"2017-03-12T22:54:03Z\",\"picture\":\"http://dummyimage.com/221x100.png/5fa2dd/ffffff\"}]}]"
export let loggedIn = false;
export const local = window.localStorage;
if (local.getItem("user") === null) {
    loggedIn = false;
}
else {
    if (JSON.parse(local.getItem("timestamp") > Date.now()) - 1000 * 60 * 60 * 12)
        loggedIn = local.getItem("user");
    else {
        local.removeItem("user");
        local.removeItem("timestamp");
        loggedIn = false;
    }
}


export let posts = JSON.parse(json)[0];
export let users = JSON.parse(json)[1];
export function SetUser(username, password) {
    if (users.find((user) => user.username === username && user.password === password)) {
        local.setItem("user", username);
        local.setItem("timestamp", JSON.stringify(new Date()));
        loggedIn = username;
        return true;
    }
    else {
        return false;
    }
}
users.forEach(element => {
    console.log(element);
});
//JSON.parse("[{\"id\":1,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"John Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[{\"id\":2,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jane Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]}]},{\"id\":3,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jaasdne Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]},{\"id\":4,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Johsdfasdfn Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[{\"id\":5,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jansdfsdfe Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]},{\"id\":6,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jane Dsdfsdfoe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]}]},{\"id\":7,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jsadasdohsdfasdfn Doe\",\"time\":\"2023-04-01T10:00:00.023Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[{\"id\":8,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jansdfsdfe Doesda\",\"time\":\"2023-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]},{\"id\":9,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jane Dsdfsdfoe\",\"time\":\"2023-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]}]},{\"id\":10,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Johsdfasdfn Doe\",\"time\":\"2020-02-01T11:00:00.000Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[{\"id\":11,\"picture\":\"https://picsum.photos/200/300\",\"username\":\"Jansdfsdfe Doe\",\"time\":\"2021-11-10T11:23:23.023Z\",\"body\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nisl, eget aliquam\",\"comments\":[]}]}]");