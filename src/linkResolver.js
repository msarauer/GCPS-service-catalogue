exports.linkResolver = (doc) => {
  switch (doc.type) {
    case "home": {
      return `/${doc.lang.substring(0, 2)}`;
    }

    case "page": {
      return `/${doc.lang.substring(0, 2)}/${doc.uid}`;
    }

    default:
      return "/";
  }
};
