function links(parent, args, context) {
  return context.prisma.user
    .findUnique({where: {id: parent.id}})
    .links();
}

const id = (parent) => parent.id
const name = (parent) => {
  console.log(parent)
  return parent.name
}
const email = (parent) => parent.email

module.exports = {
  id,
  name,
  email,
  links
};
