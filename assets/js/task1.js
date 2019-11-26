'use strict';

const SOCIAL_NETWORKS = Object.freeze( {
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    SKYPE: "SKYPE",
    GOOGLE_PLUS: "GOOGLE_PLUS",
});


const users = [
    {
        id: 1,
        name: "Name1",
        surname: "Surname1",
        avatar: "",
        description: "",
        socialNetworkList: [
            SOCIAL_NETWORKS.FACEBOOK,
            SOCIAL_NETWORKS.TWITTER,
            SOCIAL_NETWORKS.SKYPE,
            SOCIAL_NETWORKS.GOOGLE_PLUS,
        ]
    },
    {
        id: 2,
        name: "Name2",
        surname: "Surname2",
        avatar: "",
        description: "",
        socialNetworkList: [
            SOCIAL_NETWORKS.FACEBOOK,
            SOCIAL_NETWORKS.TWITTER,
            SOCIAL_NETWORKS.SKYPE,
        ]
    },
    {
        id: 3,
        name: "Name3",
        surname: "Surname3",
        avatar: "",
        description: "",
        socialNetworkList: [
            SOCIAL_NETWORKS.FACEBOOK,
            SOCIAL_NETWORKS.TWITTER,

        ]
    },
    {
        id: 4,
        name: "Name4",
        surname: "Surname4",
        avatar: "",
        description: "",
        socialNetworkList: [
            SOCIAL_NETWORKS.FACEBOOK,

        ]
    },
    {
        id: 5,
        name: "Name5",
        surname: "Surname5",
        avatar: "",
        description: "",
        socialNetworkList: [
            SOCIAL_NETWORKS.FACEBOOK,
            SOCIAL_NETWORKS.TWITTER,
            SOCIAL_NETWORKS.SKYPE,
            SOCIAL_NETWORKS.GOOGLE_PLUS,
        ]
    },
    {
        id: 6,
        name: "Name6",
        surname: "Surname6",
        avatar: "",
        description: "",
        socialNetworkList: [
            SOCIAL_NETWORKS.SKYPE,
            SOCIAL_NETWORKS.GOOGLE_PLUS,
        ]
    },
    {
        id: 7,
        name: "Name7",
        surname: "Surname7",
        avatar: "",
        description: "",
        socialNetworkList: [
            SOCIAL_NETWORKS.GOOGLE_PLUS,
        ]
    },
    {
        id: 8,
        name: "Name8",
        surname: "Surname8",
        avatar: "",
        description: "",
        socialNetworkList: [
            SOCIAL_NETWORKS.FACEBOOK,
            SOCIAL_NETWORKS.TWITTER,
            SOCIAL_NETWORKS.SKYPE,
            SOCIAL_NETWORKS.GOOGLE_PLUS,
        ]
    },
];

const userListElement = document.getElementsByClassName("cardContainer");

users.forEach(
    (user) => {
        userListElement.append(createUserListElement(user));
    }
);

function createUserListElement(user) {
    const userImageContainerElement = document.createElement("div");
    userImageContainerElement.classList.add("userCard");
}

function createUserImageElement(user) {
    const userImageContainerElement = document.createElement("div");
    userImageContainerElement.classList.add("userAvatar");
    const userImage = document.createElement("img");
    userImage.setAttribute("src", "");
    userImage.setAttribute("alt", "user avatar")
    userImageContainerElement.append(userImage);

    return userImageContainerElement;
}

function createUserFullName(user) {
    const userFullNameContainerElement = document.createElement("div");
    userFullNameContainerElement.classList.add("fullName");
    const userFullName = document.createElement("h4");
    userFullName.innerText = `${user.name} ${user.surname}`;
    userFullNameContainerElement.append(userFullName);

    return userFullNameContainerElement;

}

function createDescription(user) {
    const userDescriptionContainer = document.createElement("div");
    userDescriptionContainer.classList.add("description");
    const userDescription = document.createElement("p");
    userDescription.innerText = `${user.description}`;
    userDescriptionContainer.append(userDescription);

    return userDescriptionContainer;
}