export const mosaics = [
    {
        id: 1,
        name: "Mosaic's name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt dignissim elit non fermentum. In hac habitasse platea dictumst. Phasellus quis mi vel turpis consectetur gravida ac vitae turpis. Donec vitae sapien suscipit, efficitur dolor et, posuere ex. Vestibulum ultrices lacus vel efficitur varius. Pellentesque lectus eros, molestie in aliquam quis, tincidunt vitae ligula. Aliquam et interdum lectus. Etiam volutpat et nisi viverra rutrum. Etiam convallis nibh non dapibus porta. Nunc consectetur felis sit amet sollicitudin porta. Pellentesque iaculis nibh ac commodo mollis. Donec venenatis nunc a sodales mattis. Donec sed scelerisque ligula, sed ullamcorper leo. Praesent luctus rhoncus diam, eu aliquam est suscipit eget. Nulla lobortis massa bibendum mauris bibendum, ullamcorper ornare nunc euismod. Sed malesuada quam sit amet nunc viverra vestibulum. Aliquam pellentesque tortor sed mattis porttitor. Nulla in tellus maximus, eleifend lacus sed, convallis justo. Proin massa tortor, sollicitudin vel lacus vitae, efficitur sollicitudin libero. Phasellus id enim quam. Aenean congue feugiat ex sit amet dictum. Suspendisse placerat eros et iaculis scelerisque. Praesent ut neque ut dui efficitur vestibulum ut et ante. Duis scelerisque tortor eu velit rhoncus, ac suscipit ante tincidunt. Vestibulum a tortor placerat, varius lorem nec, ullamcorper turpis. Etiam accumsan auctor est, non dictum.",
        theme_id: 1,
        url: "/mosaics/mosaics-1.jpeg",
        tiles: [
            {
                id: 6,
                url: "/tiles/tiles-1.jpg",
                tags: ["tag-1", "tag-2"],
                user: {id: 1, nickname: "alice.in.wonderworld", avatar: "/users/avatar-1.png"}
            },
            {
                id: 7,
                url: "/mosaics/mosaics-10.jpeg",
                tags: ["some-tag", "another-tag"],
                user: {id: 2, nickname: "andriibosyk", avatar: "/users/avatar-2.png"}
            },
            {
                id: 8,
                url: "/tiles/tiles-3.jpeg",
                tags: ["no-tags"],
                user: {id: 3, nickname: "test", avatar: "/users/avatar-3.png"}
            },
            {
                id: 9,
                url: "/mosaics/mosaics-8.jpeg",
                tags: [],
                user: {id: 4, nickname: "another.user", avatar: "/users/avatar-4.png"}
            },
            {
                id: 10,
                url: "/mosaics/mosaics-5.jpeg",
                tags: ["tag-2", "another-tag"],
                user: {id: 5, nickname: "test.testovich", avatar: "/users/avatar-5.png", password: "test"}
            }
        ]
    },
    {
        id: 2,
        name: "Cool Mosaic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        theme_id: 1,
        url: "/mosaics/mosaics-2.jpeg",
        tiles: [
            {
                id: 1,
                url: "/tiles/tiles-3.jpeg",
                tags: ["red", "black", "white"],
                user: {id: 6, nickname: "admin", avatar: "/users/avatar-6.png", password: "admin"}
            },
            {
                id: 2,
                url: "/mosaics/mosaics-3.jpeg",
                tags: ["white", "some-tag"],
                user: {id: 7, nickname: "user", avatar: "/users/avatar-7.png", password: "user"}
            },
            {
                id: 3,
                url: "/tiles/tiles-1.jpg",
                tags: ["red", "tag-1", "no-tags"],
                user: {id: 8, nickname: "alicewara", avatar: "/users/avatar-8.jpg", password: "alicewara"}
            },
            {
                id: 4,
                url: "/mosaics/mosaics-10.jpeg",
                tags: ["new-tag", "empty-tag"],
                user: {id: 9, nickname: "alice_the_princess", avatar: "/users/avatar-9.png", password: "alice_the_princess"}
            },
            {
                id: 5,
                url: "/mosaics/mosaics-6.jpeg",
                tags: ["all-tags", "empty-tag", "new-tag", "red", "tag-1", "no-tags", "white", "some-tag", "black", "tag-2", "another-tag"],
                user: {id: 10, nickname: "ImAlice", avatar: "/users/avatar-10.jpg", password: "imalice"}
            }
        ]
    },
    {
        id: 3,
        name: "One more mosaic",
        description: "Vestibulum tincidunt dignissim elit non fermentum. In hac habitasse platea dictumst.",
        theme_id: 4,
        url: "/mosaics/mosaics-3.jpeg",
        tiles: [
            {
                id: 11,
                url: "/tiles/tiles-2.jpeg",
                tags: ["all-tags", "empty-tag", "new-tag", "red", "tag-1", "no-tags", "white", "some-tag", "black", "tag-2", "another-tag"],
                user: {id: 10, nickname: "ImAlice", avatar: "/users/avatar-10.jpg", password: "imalice"}
            },
            {
                id: 12,
                url: "/tiles/tiles-3.jpeg",
                tags: ["white", "some-tag"],
                user: {id: 7, nickname: "user", avatar: "/users/avatar-7.png", password: "user"}
            },
            {
                id: 13,
                url: "/tiles/tiles-9.jpeg",
                tags: ["all-tags", "empty-tag", "new-tag", "red", "tag-1", "no-tags", "white", "some-tag", "black", "tag-2", "another-tag"],
                user: {id: 10, nickname: "ImAlice", avatar: "/users/avatar-10.jpg", password: "imalice"}
            },
            {
                id: 14,
                url: "/tiles/tiles-8.jpeg",
                tags: ["white", "some-tag"],
                user: {id: 7, nickname: "user", avatar: "/users/avatar-7.png", password: "user"}
            },
            {
                id: 15,
                url: "/tiles/tiles-4.jpeg",
                tags: ["white", "some-tag"],
                user: {id: 7, nickname: "user", avatar: "/users/avatar-7.png", password: "user"}
            },
            {
                id: 16,
                url: "/tiles/tiles-1.jpg",
                tags: ["all-tags", "empty-tag", "new-tag", "red", "tag-1", "no-tags", "white", "some-tag", "black", "tag-2", "another-tag"],
                user: {id: 10, nickname: "ImAlice", avatar: "/users/avatar-10.jpg", password: "imalice"}
            }
        ]
    },
    {
        id: 4,
        name: "New mosaic",
        description: "Phasellus quis mi vel turpis consectetur gravida ac vitae turpis. Donec vitae sapien suscipit, efficitur dolor et, posuere ex.",
        theme_id: 2,
        url: "/mosaics/mosaics-4.jpeg",
        tiles: [
            {
                id: 17,
                url: "/mosaics/mosaics-3.jpeg",
                tags: ["red", "tag-1", "no-tags"],
                user: {id: 8, nickname: "alicewara", avatar: "/users/avatar-8.jpg", password: "alicewara"}
            },
            {
                id: 18,
                url: "/mosaics/mosaics-4.jpeg",
                tags: ["red", "tag-1", "no-tags"],
                user: {id: 8, nickname: "alicewara", avatar: "/users/avatar-8.jpg", password: "alicewara"}
            },
            {
                id: 19,
                url: "/mosaics/mosaics-10.jpeg",
                tags: ["all-tags", "empty-tag", "new-tag", "red", "tag-1", "no-tags", "white", "some-tag", "black", "tag-2", "another-tag"],
                user: {id: 10, nickname: "ImAlice", avatar: "/users/avatar-10.jpg", password: "imalice"}
            },
            {
                id: 20,
                url: "/mosaics/mosaics-2.jpeg",
                tags: ["tag-1", "tag-2"],
                user: {id: 1, nickname: "alice.in.wonderworld", avatar: "/users/avatar-1.png"}
            }
        ]
    },
    {
        id: 5,
        name: "Try to figure out mosaic's name",
        description: "Duis scelerisque tortor eu velit rhoncus, ac suscipit ante tincidunt. Vestibulum a tortor placerat, varius lorem nec, ullamcorper turpis. Etiam accumsan auctor est, non dictum.",
        theme_id: 3,
        url: "/mosaics/mosaics-5.jpeg",
        tiles: [
            {
                id: 21,
                url: "/tiles/tiles-2.jpeg",
                tags: ["tag-1", "tag-2"],
                user: {id: 1, nickname: "alice.in.wonderworld", avatar: "/users/avatar-1.png"}
            },
            {
                id: 22,
                url: "/tiles/tiles-4.jpeg",
                tags: ["tag-1", "tag-2"],
                user: {id: 1, nickname: "alice.in.wonderworld", avatar: "/users/avatar-1.png"}
            },
            {
                id: 23,
                url: "/tiles/tiles-6.jpeg",
                tags: ["all-tags", "empty-tag", "new-tag", "red", "tag-1", "no-tags", "white", "some-tag", "black", "tag-2", "another-tag"],
                user: {id: 10, nickname: "ImAlice", avatar: "/users/avatar-10.jpg", password: "imalice"}
            },
            {
                id: 24,
                url: "/tiles/tiles-8.jpeg",
                tags: ["all-tags", "empty-tag", "new-tag", "red", "tag-1", "no-tags", "white", "some-tag", "black", "tag-2", "another-tag"],
                user: {id: 10, nickname: "ImAlice", avatar: "/users/avatar-10.jpg", password: "imalice"}
            },
            {
                id: 25,
                url: "/tiles/tiles-10.jpeg",
                tags: ["all-tags", "empty-tag", "new-tag", "red", "tag-1", "no-tags", "white", "some-tag", "black", "tag-2", "another-tag"],
                user: {id: 10, nickname: "ImAlice", avatar: "/users/avatar-10.jpg", password: "imalice"}
            },
            {
                id: 26,
                url: "/mosaics/mosaics-2.jpeg",
                tags: ["some-tag", "another-tag"],
                user: {id: 2, nickname: "andriibosyk", avatar: "/users/avatar-2.png"}
            },
            {
                id: 27,
                url: "/mosaics/mosaics-4.jpeg",
                tags: ["no-tags"],
                user: {id: 3, nickname: "test", avatar: "/users/avatar-3.png"}
            },
            {
                id: 28,
                url: "/mosaics/mosaics-6.jpeg",
                tags: ["no-tags"],
                user: {id: 3, nickname: "test", avatar: "/users/avatar-3.png"}
            },
            {
                id: 29,
                url: "/mosaics/mosaics-8.jpeg",
                tags: ["some-tag", "another-tag"],
                user: {id: 2, nickname: "andriibosyk", avatar: "/users/avatar-2.png"}
            },
            {
                id: 30,
                url: "/mosaics/mosaics-10.jpeg",
                tags: ["some-tag", "another-tag"],
                user: {id: 2, nickname: "andriibosyk", avatar: "/users/avatar-2.png"}
            },
        ]
    },
];