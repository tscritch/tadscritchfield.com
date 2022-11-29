export default {
  name: "portfolioPiece",
  title: "Portfolio Piece",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "headerImage",
      title: "Header Image",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
    {
      name: "tag",
      title: "Tag",
      type: "string",
    },
  ],
};
