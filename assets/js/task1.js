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
        avatar: "https://www.e-xecutive.ru/uploads/article/image/1987310/thumb_Bocharsky.jpg",
        description: "dmfbgvjdfoijgo sdfiogjdfsjgiodf siodfgjfdjg djgfidjf fjdfk lasm",
        socialNetworkList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
            {type : SOCIAL_NETWORKS.GOOGLE_PLUS, href: "#"},
        ]
    },
    {
        id: 2,
        name: "Name2",
        surname: "Surname2",
        avatar: "https://pristor.ru/wp-content/uploads/2019/09/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D1%8B-%D0%B7%D0%B0-40-%D1%84%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8015.jpg",
        description: ";j[h; aaea plgjhp zbsgvg pgjh[aks apa[sk",
        socialNetworkList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
        ]
    },
    {
        id: 3,
        name: "Name3",
        surname: "Surname3",
        avatar: "",
        description: "dlsadlfp apsl[d; fd<ze [;g[ g<tgzy plplp lplf k<jnzkxnk p;h[j[ osidiui hpfgohpo isaudi ff",
        socialNetworkList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
        ]
    },
    {
        id: 4,
        name: "Name4",
        surname: "Surname4",
        avatar: "https://cdn.lifehacker.ru/wp-content/uploads/2018/04/woman-3083375_1920_1524655476-e1524655499103.jpg",
        description: "o];l']ol ;'l]' fasrdrs cnvkb pyuopyupy uwyewye wrpwrp ip[y",
        socialNetworkList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
        ]
    },
    {
        id: 5,
        name: "Name5",
        surname: "Surname5",
        avatar: "https://img2.goodfon.ru/wallpaper/nbig/5/66/emily-rudd-girl-devushka-vzglyad-437.jpg",
        description: "klhjloghk rdwrs oyhpoup pljphlp jdjxg dktged irjieuir eioteitrie iwerierie eirier",
        socialNetworkList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
            {type : SOCIAL_NETWORKS.GOOGLE_PLUS, href: "#"},
        ]
    },
    {
        id: 6,
        name: "Name6",
        surname: "Surname6",
        avatar: "https://dok7xy59qfw9h.cloudfront.net/566/203/371/-69996995-1t7nemh-jdhb82ra01be6bk/original/COhrPJYTohM.jpg",
        description: ";k[lpk[ sgvdfstd [yup[ypu[y wyettwetw jcnvjcnvj hl;jphljp weyywyeyu rotorito wuey7wye7w eoitroeito wueyuwyeu fohkoghko lgjlkpgh",
        socialNetworkList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
        ]
    },
    {
        id: 7,
        name: "Name7",
        surname: "Surname7",
        avatar: "https://www.cosmo.com.ua/i/publications/22/830_550/opredeli-svoe-nastroenie-po-avatarke-10751.jpg",
        description: "[ki[kp yegtwgfet pylupyp kdjfkldkf dlfklodfktgo oee",
        socialNetworkList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
        ]
    },
    {
        id: 8,
        name: "Name8",
        surname: "Surname8",
        avatar: "https://trikky.ru/wp-content/blogs.dir/1/files/2017/12/1-680-3.jpg",
        description: "[i;o[i shudhush euyrue ogkhot jdnfjdfj pghpg ue koghkotr ekrjie ortko",
        socialNetworkList: [
            {type : SOCIAL_NETWORKS.FACEBOOK, href: "#"},
            {type : SOCIAL_NETWORKS.TWITTER, href: "#"},
            {type : SOCIAL_NETWORKS.SKYPE, href: "#"},
            {type : SOCIAL_NETWORKS.GOOGLE_PLUS, href: "#"},
        ]
    },
];

const userListElement = document.getElementById("userCardContainer");

users.forEach(
    (user) => {
        userListElement.append(createUserListElement(user));
    }
);



function createUserListElement(user) {
    const userContainerElement = document.createElement("div");
    userContainerElement.classList.add("userCard");
    userContainerElement.setAttribute("id", `${user.id}`);
    const userRemoveElement = createCloseButton(user);
    const userImageElement = createUserImageElement(user);
    const userFullName = createUserFullName(user);
    const userDescription = createUserDescription(user);
    const userSocialNetworks = createUserSocialNetworks(user);

    userContainerElement.append(userRemoveElement);
    userContainerElement.append(userImageElement);
    userContainerElement.append(userFullName);
    userContainerElement.append(userDescription);
    userContainerElement.append(userSocialNetworks);

    return userContainerElement;

}

function createCloseButton(user) {
    const closeButtonContainer = document.createElement("div");
    closeButtonContainer.classList.add("closeButton");
    const closeImage = document.createElement("img");
    closeImage.setAttribute("src", "assets/images/icons/account-remove.png");
    closeImage.setAttribute("alt", "DELETE");
    closeButtonContainer.append(closeImage);

    closeButtonContainer.addEventListener('click', (event) => {
        event.stopPropagation();
        const userListItemElement = document.getElementById(user.id);
        userListItemElement.remove();
    });

    return closeButtonContainer;

}

function createUserImageElement(user) {
    const userImageContainerElement = document.createElement("div");
    userImageContainerElement.classList.add("userAvatar");
    const userImage = document.createElement("img");
    /*userImage.setAttribute("src", `${user.avatar}`);*/
    userImage.setAttribute("src", user.avatar? user.avatar: "assets/images/anonim.png");
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

function createUserDescription(user) {
    const userDescriptionContainer = document.createElement("div");
    userDescriptionContainer.classList.add("description");
    const userDescription = document.createElement("p");
    userDescription.innerText = `${user.description}`;
    userDescriptionContainer.append(userDescription);

    return userDescriptionContainer;
}

function createUserSocialNetworks(user) {
    const userSocialNetworkContainer = document.createElement("div");
    userSocialNetworkContainer.classList.add("socialNetworksList");
    user.socialNetworkList.forEach( socialLink => {
        if(socialLink.type === SOCIAL_NETWORKS.FACEBOOK) {
            const userFacebook = document.createElement("a");
            userFacebook.setAttribute("href", `${socialLink.href}`);
            const facebookImage = document.createElement("img");
            facebookImage.setAttribute("src", "assets/images/icons/facebook.png");
            facebookImage.setAttribute("alt", "facebook");
            userFacebook.append(facebookImage);
            userSocialNetworkContainer.append(userFacebook);
        }
        if(socialLink.type === SOCIAL_NETWORKS.TWITTER) {
            const userTwitter = document.createElement("a");
            userTwitter.setAttribute("href", `${socialLink.href}`);
            const twitterImage = document.createElement("img");
            twitterImage.setAttribute("src", "assets/images/icons/twitter.png");
            twitterImage.setAttribute("alt", "twitter");
            userTwitter.append(twitterImage);
            userSocialNetworkContainer.append(userTwitter);
        }
        if(socialLink.type === SOCIAL_NETWORKS.SKYPE) {
            const userSkype = document.createElement("a");
            userSkype.setAttribute("href", `${socialLink.href}`);
            const skypeImage = document.createElement("img");
            skypeImage.setAttribute("src", "assets/images/icons/skype.png");
            skypeImage.setAttribute("alt", "skype");
            userSkype.append(skypeImage);
            userSocialNetworkContainer.append(userSkype);
        }
        if(socialLink.type === SOCIAL_NETWORKS.GOOGLE_PLUS) {
            const userGogglePlus = document.createElement("a");
            userGogglePlus.setAttribute("href", `${socialLink.href}`);
            const googlePlusImage = document.createElement("img");
            googlePlusImage.setAttribute("src", "assets/images/icons/google-plus.png");
            googlePlusImage.setAttribute("alt", "google-plus");
            userGogglePlus.append(googlePlusImage);
            userSocialNetworkContainer.append(userGogglePlus);
        }
    });

    return userSocialNetworkContainer;
}


