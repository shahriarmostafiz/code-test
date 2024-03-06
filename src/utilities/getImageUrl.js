const getImageUrl = (url, type) => {
  let link;
  if (type === "avatar") {
    link = `http://localhost:3000/uploads/avatar/${url}`;
  } else {
    link = `http://localhost:3000/uploads/blog/${url}`;
  }
  return link;
};
export default getImageUrl;
