const getCurrentUser = () => {
  return {
    id: 1,
    email: "mgargano@gmail.com",
    name: "Ali Abbas",
    bio: "The quick brown fox.....",
    avatar: "https://placebear.com/200/200",
  };
};

const getLinks = (userId) => {
  return [
    {
      id: 1,
      userId: 1,
      url: "https://twitter.com/foobar",
      order: 1,
      linkType: "social",
      title: "Twitter",
    },
    {
      id: 2,
      userId: 1,
      url: "https://facebook.com/foobar",
      order: 2,
      linkType: "social",
      title: "Facebook",
      
    },
    {
      id:6,
      userId: 1,
      url: "https://instagram.com/foobar",
      order: 2,
      linkType: "social",
      title: "Instagram",
      
    },
    {
      id: 8,
      userId: 1,
      url: "https://snapchat.com/foobar",
      order: 2,
      linkType: "social",
      title: "Snapchat",
      
    },
    {
      id: 3,
      userId: 1,
      url: "https://mycompany.com",
      order: 1,
      linkType: "link",
      title: "Link 1",
    },
    {
      id: 4,
      userId: 1,
      url: "https://myteam.com",
      order: 2,
      linkType: "link",
      title: "Link 2",
    },
    {
      id: 4,
      userId: 1,
      url: "https://instagram.com",
      order: 2,
      linkType: "link",
      title: "Link 3",
    },
    {
      id: 4,
      userId: 1,
      url: "https://facebook.com",
      order: 2,
      linkType: "link",
      title: "Link 4",
    },

  ];
};

const getLinksFiltered = (userId, by) => {
  if (!["social", "link"].includes(by)) {
    return false;
  }

  return getLinks()
    .filter(({ linkType }) => linkType === by)
    .sort((a, b) => a.order - b.order);
};

const getSocialLinks = (userId) => {
  return getLinksFiltered(userId, "social");
};

const getLinksLinks = (userId) => {
  return getLinksFiltered(userId, "link");
};

export { getLinksLinks, getSocialLinks, getCurrentUser };
