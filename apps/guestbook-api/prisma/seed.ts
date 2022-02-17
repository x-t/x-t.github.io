import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

const userData: Prisma.postsCreateInput[] = [
  {
    name: "Test x1",
    comment: "Guestbook testing database",
  },
  {
    name: "Test x2",
    comment:
      "Et sit rerum ducimus id qui minima vitae. Incidunt velit ipsam repudiandae nam maiores.",
  },
  {
    name: "Test x3",
    comment:
      "Architecto non aut dolores placeat sit. Possimus officia et quo. Sed illo non maiores.",
  },
  {
    name: "Text x4",
    comment:
      "Delectus natus at dolor hic necessitatibus minus et. Cum necessitatibus quia temporibus dolorum qui officiis.",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const post = await prisma.posts.create({
      data: u,
    });
    console.log(`Created post with id: ${post.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
